import GridComp from "../components/gridComp/gridComp";
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
      fellowship: res.items,
    },
  };
};

export default function Index({ fellowship, interviews }) {
  return (
    <div className={styles.container}>
      <div>
        <GridComp fellowship={fellowship} />
      </div>
    </div>
  );
}
