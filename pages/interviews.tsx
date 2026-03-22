import InterviewComp from '../components/InterviewComp/InterviewComp'
import { getInterviewsPageData } from '../lib/notion'
import type { GetStaticProps, NextPage } from 'next'

interface InterviewsProps {
  interviews: any[]
}

export const getStaticProps: GetStaticProps<InterviewsProps> = async (
  context
) => {
  try {
    const items = await getInterviewsPageData()

    return {
      props: {
        interviews: items,
      },
      revalidate: 30,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        interviews: [],
      },
      revalidate: 5,
    }
  }
}

const Interviews: NextPage<InterviewsProps> = ({ interviews }) => {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Artist Reflections</h1>
          <h2 className="pageSubtitle">
            Artist reflections is a series of short interviews about AIR
            models, structures, personal experiences and application processes.
          </h2>
        </div>
      </div>
      <InterviewComp interviews={interviews} />
    </div>
  )
}

export default Interviews
