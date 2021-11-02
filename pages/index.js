import { createClient } from "contentful";
import GridComp from "../components/gridComp/gridComp";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Head from 'next/head'
// import { MyDocument } from "./_document";
// import SearchBar from "../components/searchBar"

export const getStaticProps = async (context) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "artist" });

  return {
    props: {
      artist: res.items,
    },
  };
};

export default function Index({ artist }) {
  return (
  <div>
    <NavBar />
    {/* <MyDocument /> */}
    <GridComp artist={artist} />
    <Footer />
  </div>
  )
}


