import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css";

function Guitar({ guitar }) {
  const { description, image, name, price, url } = guitar;

  return (
    <div className={styles.guitar}>
      {
        <Image
          src={image.data[0].attributes.formats.medium.url}
          alt={`guitar ${name}`}
          width={600}
          height={400}
        />
      }
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}€</p>
        <Link className={styles.link} href={`/guitars/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
}

export default Guitar;
