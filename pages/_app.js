import { useState, useEffect, use } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : [];
  const [cart, setCart] = useState(cartLS);

  const [page, setPage] = useState(false);
  useEffect(() => {
    setPage(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitar) => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // Iterar para actualizar la cantidad
      const actualizedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      // Se asigna al array
      setCart([...actualizedCart]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCart([...cart, guitar]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const productDelete = (id) => {
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const quantityUpdate = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = parseInt(guitar.quantity);
      }
      return guitarState;
    });
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };
  return page ? (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      productDelete={productDelete}
      quantityUpdate={quantityUpdate}
    />
  ) : null;
}
