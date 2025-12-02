import InterviewComp from '../components/InterviewComp/InterviewComp.jsx'
import { getInterviewsPageData } from '../lib/notion'

export const getStaticProps = async (context) => {
  const items = await getInterviewsPageData();
  
  return {
    props: {
      interviews: items,
    },
    revalidate: 30
  }
}

export default function interviews({ interviews }) {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Artist Reflections</h1>
          <h2 className="pageSubtitle">
            Artist reflections is a series of short interviews about AIR models,
            structures, personal experiences and application processes.
          </h2>
        </div>
      </div>
      <InterviewComp interviews={interviews} />
    </div>
  )
}
