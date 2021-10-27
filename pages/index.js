import { createClient } from "contentful";
import GridComp from "../components/gridComp/gridComp";

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
  return <div>
    {/* <NavBar />
    <SearchBar /> */}
    <GridComp artist={artist} />

  </div>;
}


