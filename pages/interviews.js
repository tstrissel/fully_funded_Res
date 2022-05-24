import InterviewComp from "../components/InterviewComp/InterviewComp.jsx";
import { client } from "../lib/contentful.js";

export const getStaticProps = async (context) => {
  const res = await client.getEntries({ content_type: "interviews" });

  return {
    props: {
      interviews: res.items,
    },
  };
};

export default function interviews({ interviews }) {
  return (
    <div>
      <InterviewComp interviews={interviews} />
    </div>
  );
}
