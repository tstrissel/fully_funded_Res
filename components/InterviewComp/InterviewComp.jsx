import styles from "./InterviewComp.module.css"

export default function interviewComp({interviews}) {
  return (
    <div>
      <h1>Artist Reflections</h1>
      <p>
        Artist reflections is a series of short interviews about AIR models,
        structures, personal experiences and application processes.
      </p>

      {interviews.map((interviews) => {
        const { interviewExample, interviewExample2 } = interviews.fields;

        return (
          <div className={styles.cards} key={interviews.sys.id}>
            <p>{interviewExample}</p>
            <p>{interviewExample2}</p>
          </div>
        );
      })}
    </div>
  );
}
