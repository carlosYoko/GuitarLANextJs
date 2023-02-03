import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`GutiarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
