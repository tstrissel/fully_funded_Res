import FellowshipList from "../components/FellowshipList";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
// import { MyDocument } from "./_document";
// import SearchBar from "../components/searchBar"
import styles from "../public/index.module.css";
import { client } from "../lib/contentful.js";

export const getStaticProps = async (context) => {
  const res = await client.getEntries({ content_type: "fellowship" });

  return {
    props: {
      fellowships: res.items,
    },
  };
};

export default function Index({ fellowships, interviews }) {
  return (
    <div className={styles.container}>
      <FellowshipList fellowships={fellowships} />
    </div>
  );
}
