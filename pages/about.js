import Link from 'next/link'
import Image from 'next/image'
import exampleImage from '../public/FFR-assets/Icons/profile_icon.svg'
import patreon from '../public/FFR-assets/Social links/Patreon button/Patreon.png'
import buymeacoffee from '../public/FFR-assets/Social links/Buy me a coffee button/default-yellow.png'
import styles from './about.module.css'

export default function about() {
  return (
    <div>
      <div className="titleContainer">
        <h1 className="pageTitle">About us</h1>
        <p className={styles.aboutSubtitle}>
          Fully Funded Residencies is an online platform for research and
          knowledge-sharing that gathers, archives and shares fully funded
          residencies, awards, grants, and mobility funds.
        </p>
        <p className={styles.aboutMission}>
          Our mission is to work towards making the contemporary art fields more
          democratic, transparent and equal. We aim to facilitate an open
          environment for cultural workers to exchange knowledge, ideas and
          experience through providing evaluation forms, a pool of resources,
          applications and counselling.
        </p>
      </div>
      <div className={styles.aboutDonation}>
        <p className={styles.aboutSupport}> Ways to support us:</p>
        <Link href="https://www.patreon.com/fullyfundedresidencies" target='_blank'>
          <Image src={patreon} width={180} height={40} />
        </Link>
        <Link href="https://buymeacoffee.com/fullyfundedresi" target='_blank'>
          <Image src={buymeacoffee} width={180} height={50} />
        </Link>
      </div>
      <p className={styles.aboutMission}>
        Fully Funded Residencies is a nonprofit platform initiated in 2018 that
        aims to provide a faster and easier overview of art residences, mobility
        funds, grants, awards and to share your experiences related to these
        topics.
      </p>
      <p className={styles.aboutMission}>
        A small team is maintaining the website for free, and we would like to
        add more functionalities to improve the website’s capabilities and look,
        to buy a domain, and eventually to get ourselves a coffee so we can
        continue to search and post amazing funded opportunities and to share it
        with you!
      </p>
      <p className={styles.aboutMission}>
        If you wish to help and donate to FFR, we would appreciate it!
      </p>
      <br />
      <p className={styles.aboutSubtitle}>Thanks for your support!</p>

      <p className={styles.aboutMission}>FFR Team:</p>
      <div className={styles.teamGrid}>
        <div>
          <Link className={styles.teamMember} href="https://www.milapanic.net" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Mila Panić</h4>
          </Link>
        </div>
        <div>
          <a className={styles.teamMember} href="https://lenaskrabs.com/" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Lena Skrabs</h4>
          </a>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://cargocollective.com/palomasanchez" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Paloma Sanchez-Palencia</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://sasatatic.com/" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Sasa Tatić</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://eliotmoleba.com/about-me/" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Eliot Moleba</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://pitscher.net/index_v1.7.txt" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Mathias Schäfer</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://www.slanted.cc/" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Enrico Floriddia</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://www.rebeccaalayton.com/" target="_blank">
            <Image src={exampleImage} width={50} height={50} />
            <h4>Rebecca Layton</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}
