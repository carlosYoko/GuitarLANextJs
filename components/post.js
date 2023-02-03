import Image from "next/image";
import Link from "next/link";
import { dateFormat } from "../utils/helpers";
import styles from "../styles/blog.module.css";

function Post({ post }) {
  const { content, image, title, url, publishedAt } = post;

  return (
    <article>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`image blog ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormat(publishedAt)}</p>
        <p className={styles.resum}>{content}</p>
        <Link className={styles.link} href={`/blog/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
}

export default Post;
