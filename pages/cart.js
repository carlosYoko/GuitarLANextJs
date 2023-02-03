import { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import Image from "next/image";
import styles from "../styles/cart.module.css";

export default function Cart({ cart, quantityUpdate, productDelete }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalculation = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(totalCalculation);
  }, [cart]);

  return (
    <Layout title="Carro de compras">
      <main className="conntainer">
        <h1 className="heading">Carro de compras</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articulos</h2>
            {cart.length === 0
              ? "No tienes ningun articulo"
              : cart.map((product) => (
                  <div key={product.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={product.image}
                        alt={`imagen ${product.name}`}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{product.name}</p>
                      <div className={styles.quantity}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            quantityUpdate({
                              id: product.id,
                              quantity: e.target.value,
                            })
                          }
                          value={product.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.price}>{product.price}€</p>
                      <p className={styles.subtotal}>
                        Subtotal:{" "}
                        <span>{product.price * product.quantity}</span>€
                      </p>
                    </div>
                    <button
                      className={styles.delete}
                      type="button"
                      onClick={() => productDelete(product.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resume}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar:{total}€</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
