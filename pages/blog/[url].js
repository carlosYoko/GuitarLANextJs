import { Layout } from "@/components/layout";
import Image from "next/image";
import { dateFormat } from "@/utils/helpers";
import styles from "../../styles/blog.module.css";

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await response.json();

  return {
    props: {
      post,
    },
  };
}

function Post({ post }) {
  const { title, image, content, publishedAt } = post[0].attributes;

  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={image.data.attributes.formats.medium.url}
          width={1000}
          height={600}
          alt={`image blog ${title}`}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{dateFormat(publishedAt)}</p>
          <p>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

export default Post;
