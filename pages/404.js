import Link from "next/link";
import { Layout } from "@/components/layout";

function Page404() {
  return (
    <Layout title={"Pagina no encontrada"}>
      <p className="error"> Página no encontrada</p>
      <Link className="error-link" href="/">
        Ir a inicio
      </Link>
    </Layout>
  );
}

export default Page404;
