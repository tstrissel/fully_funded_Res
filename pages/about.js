import Link from 'next/link'
import Image from 'next/image'
import exampleImage from '../public/FFR-assets/Icons/profile_icon.svg'
import rebeccaImage from '../public/FFR-assets/People/Rebecca.svg'
import eliotImage from '../public/FFR-assets/People/Eliot.svg'
import enricoImage from '../public/FFR-assets/People/Enrico.svg'
import lenaImage from '../public/FFR-assets/People/Lena.svg'
import matthiasImage from '../public/FFR-assets/People/Matthias.svg'
import milaImage from '../public/FFR-assets/People/Mila.svg'
import palomaImage from '../public/FFR-assets/People/Paloma.svg'
import sashaImage from '../public/FFR-assets/People/Sasha.svg'
import patreon from '../public/FFR-assets/Social links/Patreon button/Patreon.png'
import buymeacoffee from '../public/FFR-assets/Social links/Buy me a coffee button/default-yellow.png'
import styles from './about.module.css'

export default function about() {
  return (
    <div>
      <div className="titleContainer">
        <h1 className="pageTitle">About us</h1>
      <div className={styles.teamGrid}>
        <div>
          <Link className={styles.teamMember} href="https://www.milapanic.net" target="_blank">
            <Image src={milaImage} width={100} height={100} />
            <h4>Mila Panić</h4>
          </Link>
        </div>
        <div>
          <a className={styles.teamMember} href="https://lenaskrabs.com/" target="_blank">
            <Image src={lenaImage} width={100} height={100} />
            <h4>Lena Skrabs</h4>
          </a>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://cargocollective.com/palomasanchez" target="_blank">
            <Image src={palomaImage} width={100} height={100} />
            <h4>Paloma Sanchez-Palencia</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://sasatatic.com/" target="_blank">
            <Image src={sashaImage} width={100} height={100} />
            <h4>Sasa Tatić</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://eliotmoleba.com/about-me/" target="_blank">
            <Image src={eliotImage} width={100} height={100} />
            <h4>Eliot Moleba</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://pitscher.net/index_v1.7.txt" target="_blank">
            <Image src={matthiasImage} width={100} height={100} />
            <h4>Matthias Schäfer</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://www.slanted.cc/" target="_blank">
            <Image src={enricoImage} width={100} height={100} />
            <h4>Enrico Floriddia</h4>
          </Link>
        </div>
        <div>
          <Link className={styles.teamMember} href="https://www.rebeccaalayton.com/" target="_blank">
            <Image src={rebeccaImage} width={100} height={100} />
            <h4>Rebecca A. Layton</h4>
          </Link>
        </div>
      </div>
        <p className={styles.aboutSubtitle}>
          Fully Funded Residencies is a nonprofit online platform founded in 2018 for research and
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
      <p className={styles.aboutMission}>
        If you wish to help and donate to FFR, we would appreciate it!
      </p>
      <div className={styles.aboutDonation}>
        <Link href="https://www.patreon.com/fullyfundedresidencies" target='_blank'>
          <Image src={patreon} width={180} height={40} />
        </Link>
        <Link href="https://buymeacoffee.com/fullyfundedresi" target='_blank'>
          <Image src={buymeacoffee} width={180} height={50} />
        </Link>
      </div>
        <p className={styles.aboutWorkshopTitle}>
          Workshops/Talks
        </p>
        <p className={styles.aboutWorkshopDescription}>
            We offer Fully-Funded Residency talks and workshops that cover the following topics 
            and questions:
        </p>
        <ul className={styles.aboutWorkshopQuestionContainer}>
          <li className={styles.aboutWorkshopQuestions}>Who are we?</li>
          <li className={styles.aboutWorkshopQuestions}>What is an artist residency?</li>
          <li className={styles.aboutWorkshopQuestions}>As an artist, why should one apply for residencies?</li>
          <li className={styles.aboutWorkshopQuestions}>How do residencies help in our artistic journey?</li>
          <li className={styles.aboutWorkshopQuestions}>Is that an interesting residency?</li>
          <li className={styles.aboutWorkshopQuestions}>How do I apply to them? </li>
          <li className={styles.aboutWorkshopQuestions}>How do I get selected?</li>
          <li className={styles.aboutWorkshopQuestions}>Why have I been rejected?</li>
          <li className={styles.aboutWorkshopQuestions}>(We also offer a guided practical exercise on how to develop one’s application.)</li>
        </ul>
        <p className={styles.aboutWorkshopDescription}>
            Fully-Funded Residency workshops:
        </p>
        <ul className={styles.aboutWorkshopsContainer}>
          <li className={styles.aboutWorkshops}>FFR Workshop; SNANE - Strengthening Networks: Amongst Artists in North-East, Goethe-Institut Kolkata, 2024</li>
          <li className={styles.aboutWorkshops}>How to Apply for an Art Residency?;   Artists Aid    X    Galerie Met, Berlin, Germany, 2024</li>
          <li className={styles.aboutWorkshops}>DEAR APPLICANT… ; Workshop on Artist in Residence Programs, Public Art and New Artistic Strategies, Bauhaus University Weimar, Germany, 2023</li>
          <li className={styles.aboutWorkshops}>DEAR APPLICANT...; Workshop on Artist in Residence Programs, Braunschweig University, Germany, 2023</li>
          <li className={styles.aboutWorkshops}>FFR Seminar on art residencies, The URGENT (ARTIST) ATELIER at Bulevard, Art and Media Institute in Albania, 2023</li>
        </ul>
        <p className={styles.aboutWorkshopDescription}>
            Fully-Funded Residency talks:
        </p>
        <ul className={styles.aboutWorkshopsContainer}>
          <li className={styles.aboutWorkshops}>MAPS (Master Program in Art and Public Space) at Oslo National Academy of the Arts</li>
          <li className={styles.aboutWorkshops}>Residency Unlimited: Meet Over Lunch: In conversation with Fully Funded Residencies (FFR)</li>
          <li className={styles.aboutWorkshops}>LOCOMOTION MAGAZINE: ​Well Gedacht Publishing meets the FFR team</li>
        </ul>
        <p className={styles.aboutMission}>
            Would you like us to give a workshop or talk at your organisation or institution? 
            Get in touch with us. 
        </p>
      </div>

      <p className={styles.aboutSubtitle}>A thank-you note...</p>
      <p className={styles.aboutMission}>
          The unveiling of our much-anticipated new website marks a significant milestone in our journey, and we want to pause to acknowledge that it wouldn’t have been possible without your incredible support.
      </p>
      <p className={styles.aboutMission}>
      Founded in 2018 out of frustration with a climate that fostered competition instead of collaboration — and a lack of peer-to-peer support — FFR has always operated on a voluntary basis to bring exclusively paid and fair opportunities to artists and cultural workers, without gatekeeping information or charging fees.
      We want to express our gratitude to every single one of you who contributed to developing our website. Your time, donations, skills, and dedication have turned our vision into a reality. This website will help us connect, grow, and serve our community better.
      Thank you for believing in our mission and for bringing your unique talents to the table. We couldn’t have done it without you!
      </p>
      <br />
      <ul className={styles.aboutWorkshopQuestionContainer}>
          <li className={styles.aboutWorkshopQuestions}>FFR Logo Design – Nima Keshtar</li>
          <li className={styles.aboutWorkshopQuestions}>UX Design – Iva Kirova</li>
          <li className={styles.aboutWorkshopQuestions}>Website Development – Thomas Strissel, Mathias Pitscher</li>
          <li className={styles.aboutWorkshopQuestions}>Drawings / Doodles – Nikola Kekerovic</li>
          <li className={styles.aboutWorkshopQuestions}>Funded by a crowdfunding campaign supported by artists and FFR followers.</li>
        </ul>
      <br />
      <p className={styles.aboutSubtitle}>Thanks for your support!</p>
    </div>
  )
}
