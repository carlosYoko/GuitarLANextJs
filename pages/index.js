import { Layout } from "../components/layout";
import Guitar from "@/components/guitar";
import Post from "@/components/post";
import Course from "@/components/course";
import styles from "../styles/grid.module.css";

export async function getStaticProps() {
  const guitarsUrl = `${process.env.API_URL}/guitars?populate=image`;
  const postsUrl = `${process.env.API_URL}/posts?populate=image`;
  const courseUrl = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(guitarsUrl),
    fetch(postsUrl),
    fetch(courseUrl),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);
  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
}

export default function Home({ guitars, posts, course }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de musica, venta de guitarras"}
      >
        <main className="container">
          <h1 className="heading">Coleccion</h1>
          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
        <Course course={course} />
        <section className="container">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
