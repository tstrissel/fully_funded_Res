import styles from "./InterviewComp.module.css";

export default function interviewComp({ interviews }) {
  return (
    <div>
      <h1>Artist Reflections</h1>
      <p>
        Artist reflections is a series of short interviews about AIR models,
        structures, personal experiences and application processes.
      </p>
      <ul className={styles.wrapper}>
      {interviews.map((interviews) => {
        const { title, paragraph, interviewImage } = interviews.fields;

        return (
          <div className={styles.cards} key={interviews.sys.id}>
            <img
              src={interviewImage.fields.file.url}
              height="300px"
              width="350px"
            />
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
        );
      })}
      </ul>
    </div>
  );
}
