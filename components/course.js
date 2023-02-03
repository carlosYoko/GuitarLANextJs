import styles from "../styles/course.module.css";

function Course({ course }) {
  const { content, image, title } = course.attributes;
  return (
    <section className={`${styles.course} course`}>
      <style jsx>
        {`
          .course {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 /0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image?.data?.attributes.url});
          }
        `}
      </style>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}

export default Course;
