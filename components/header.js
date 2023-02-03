import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Image
          src={"/img/logo.svg"}
          width={300}
          height={40}
          alt={"logoimage"}
        />
        <nav className={styles.navigation}>
          <Link
            className={router.pathname == "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={router.pathname == "/we" ? styles.active : ""}
            href="/we"
          >
            Nosotros
          </Link>
          <Link
            className={router.pathname == "/shop" ? styles.active : ""}
            href="/shop"
          >
            Tienda
          </Link>
          <Link
            className={router.pathname == "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={router.pathname == "/cart" ? styles.active : ""}
            href="/cart"
          >
            <Image
              src={"/img/cart.png"}
              width={30}
              height={25}
              alt="cart image"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
