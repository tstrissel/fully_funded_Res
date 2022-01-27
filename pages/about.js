import Link from "next/link";
import Image from "next/image";
import exampleImage from "../public/FFR-assets/Icons/profile_icon.svg";
import patron from "../public/FFR-assets/Social links/Patreon button/Patreon.png";
import payPal from "../public/FFR-assets/Social links/PayPal button/Paypal.png";

export default function about() {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Fully Funded Residencies is an online platform for research and
        knowledge-sharing that gathers, archives and shares fully funded
        residencies, awards, grants, and mobility funds.
      </p>
      <p>
        Our mission is to work towards making the contemporary art fields more
        democratic, transparent and equal. We aim to facilitate an open
        enviroment for cultural workers to exchange knowledge, ideas and
        experience through providing evaluation forms, a pol of resources,
        applications and counselling.
      </p>
      <p> ways to support us:</p>
      <Link href="/about">
        <Image src={patron} width={180} height={40} />
      </Link>
      <Link href="/about">
        <Image src={payPal} width={180} height={50} />
      </Link>
      <p>
        Fully Funded Residences is a nonprofit platform initiated in 2018 that
        aims to provide a faster and easier overview of art residencies,
        mobility funds, grants, awards and to share oyur experiences related to
        these topics.
      </p>
      <p>
        A small team is maintaining the website for free, and we woul like to
        add more functionalities to improve the website's capabilities and look,
        to buy a domain, and eventually to get ourselves a coffee so we can
        continue to search and post amazing funded opportunities and to share it
        with you!
      </p>
      <p>if you wish to help and donate to FFR, we would appreciate it!</p>

      <p>Thanks for your support!</p>
      <p>FFR Team:</p>

      <div>
        <a>Mila Panić</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Lena Skrabs</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Paloma Sanchez-Palencia</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Sasa Tatić</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Eliot Moleba</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Mathias Schäfer</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Enrico Floriddia</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Gideon Smilansky</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
      <div>
        <a>Rebecca Layton</a>
        <Image src={exampleImage} width={50} height={50} />
      </div>
    </div>
  );
}
