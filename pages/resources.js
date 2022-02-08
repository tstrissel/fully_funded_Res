import Image from "next/image";
import { createClient } from "contentful";
import ResourcesComp from "../components/resourcesComp/resourcesComp";

export const getStaticProps = async (context) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "resources" });
  const res2 = await client.getEntries({
    content_type: "practicalAdvice",
  });
  const res2 = await client.getEntries({
    content_type: "practicalAdviceAndOpportunities",
  });
  const res3 = await client.getEntries({
    content_type: "practicalAdviceAndOpportunities",
  });
  return {
    props: {
      resources: res.items,
      practicalAdviceAndOpportunities: res2.items,
    },
  };
};

export default function resources({
  resources,
  practicalAdviceAndOpportunities,
}) {
  return (
    <div>
      <ResourcesComp
        resources={resources}
        practicalAdviceAndOpportunities={practicalAdviceAndOpportunities}
      />
    </div>
  );
}
