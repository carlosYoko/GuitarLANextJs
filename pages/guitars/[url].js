import { useState } from "react";
import styles from "../../styles/guitars.module.css";
import Image from "next/image";
import { Layout } from "../../components/layout.js";

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();
  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();
  return {
    props: { guitar },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   const response = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
//   );
//   const { data: guitar } = await response.json();
//   return {
//     props: { guitar },
//   };
// }
export default function Product({ guitar, addCart }) {
  const [quantity, setQuantity] = useState(0);

  const { name, description, image, price } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      alert("Cantidad no valida");
      return;
    }
    const selectedGuitar = {
      image: image.data[0].attributes.url,
      id: guitar[0].id,
      name,
      price,
      quantity,
    };
    addCart(selectedGuitar);
  };

  return (
    <Layout title={`Guitarra ${name}`}>
      <div className={styles.guitar}>
        {
          <Image
            src={image.data[0].attributes.url}
            alt={`guitar ${name}`}
            width={600}
            height={400}
          />
        }
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price}€</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="quantity">Cantidad:</label>
            <select
              onChange={(e) => setQuantity(+e.target.value)}
              id="quantity"
            >
              <option value="0">--Selecciona--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carro" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
