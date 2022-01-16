import { createClient } from "contentful";
import GridComp from "../components/gridComp/gridComp";
import SearchModal from "../components/SearchModal/SearchModal";


export const getStaticProps = async (context) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "fellowship" });

  return {
    props: {
      fellowship: res.items,
    },
  };
};

export default function Index({ fellowship }) {
  return (
    <div>
      <GridComp fellowship={fellowship} />
    </div>
  );
}





