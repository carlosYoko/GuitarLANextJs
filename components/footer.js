import Link from "next/link";
import styles from "../styles/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href="/">Inicio</Link>
          <Link href="/we">Nosotros</Link>
          <Link href="/shop">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <p className={styles.copyright}>
          Todos los derechos reservados {new Date().getFullYear()}.{" "}
        </p>
      </div>
    </footer>
  );
};
