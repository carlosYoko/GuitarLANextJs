import Image from "next/image";
import { Layout } from "../components/layout";
import styles from "../styles/we.module.css";

export default function We() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={
          "Sobre nosotros, GuitarLA, tienda de musica, blog de musica"
        }
      >
        <main className="container">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.content}>
            <Image src="/img/we.jpg" width={1000} height={800} alt="we image" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                labore ex atque unde iusto sequi dolores hic blanditiis
                consequatur dolorum tempora obcaecati iure id, ea perferendis
                ratione, autem nam voluptate. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et, officia blanditiis sapiente
                odit ut, numquam at incidunt molestias animi est adipisci
                facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quo, impedit quasi necessitatibus cum quis cupiditate quas ab!
                Vitae, quisquam impedit. Excepturi, consectetur. Omnis quam enim
                dolorem assumenda nam quis? Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
