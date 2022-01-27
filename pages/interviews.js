import { createClient } from "contentful";
import InterviewComp from '../components/InterviewComp/InterviewComp.jsx'

export const getStaticProps = async (context) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

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
