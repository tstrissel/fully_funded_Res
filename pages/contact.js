import Link from 'next/link'
import Image from 'next/image'
import styles from './contact.module.css'

export default function contact() {
  return (
    <div>
      <div className="titleContainer">
        <h1 className="pageTitle">Contact</h1>
        <p className={styles.contactSubtitle}>
          If you want to contribute with an open call or have a question, feel
          free to send us an email at <br></br>
          <a
            href="mailto:fullyfunded.residencies@gmail.com"
            className="underlined"
          >
            fullyfunded.residencies@gmail.com
          </a>
        </p>
      </div>
      <hr />
      <br />
      <p className={styles.contactSubtitle}>
        Do you need help with writing an application, motivation letter or
        project proposal?{' '}
      </p>
      <p className={styles.contactSubtitle}>
        We can help! Write to us at <br></br>{' '}
        <a
          href="mailto:fullyfunded.residencies@gmail.com"
          className="underlined"
        >
          fullyfunded.residencies@gmail.com
        </a>
      </p>

      <p className={styles.contactAim}>
        Our aim is to help everyone with professional advice regardless of
        individual financial <br></br> situation. That's why our services are
        based on donations and pay-what-you-can.
      </p>
    </div>
  )
}
