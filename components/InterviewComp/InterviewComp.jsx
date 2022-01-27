import styles from "./InterviewComp.module.css"
import interButton from "../../public/FFR-assets/Buttons/Buttons/read-interview-button.svg"
import Image from "next/image";
import Link from "next/link";

export default function interviewComp({ interviews }) {
  return (
    <div>
      <h1 className="openCalls title">Artist Reflections</h1>
      <p className="subtitleOpenCalls title is-4">
        Artist reflections is a series of short interviews about AIR <br></br> models,
        structures, personal experiences and application<br></br> processes.
      </p>
      <ul className={styles.wrapper}>
        {interviews.map((interviews) => {
          const { title, paragraph, interviewImage } = interviews.fields;

          return (
            <div className={styles.cards} key={interviews.sys.id}>
              <img
                className={styles.cardImg}
                src={interviewImage.fields.file.url}
              />
              <h1 className={styles.interviewTitle}>{title}</h1>
              <p className={styles.interviewText}>{paragraph}</p>
          <Link href="/interviews">
              <div className={styles.interviewButton}>
              <Image 
                src={interButton} height={44} width={133}/>
              </div>
          </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
