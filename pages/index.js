import OpenCallsList from '../components/OpenCalls'
import { getOpenCallsPageData } from '../lib/notion'

export const getStaticProps = async (context) => {
  try {
    const { openCalls, countriesList, typesList } =
      await getOpenCallsPageData()

    return {
      props: {
        openCalls,
        countriesList,
        typesList,
      },
      revalidate: 30,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        openCalls: [],
        countriesList: [],
        typesList: [],
      },
      revalidate: 5, // Retry sooner on error
    }
  }
}

export default function Index({ openCalls, countriesList, typesList }) {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Open Calls</h1>
          <h2 className="pageSubtitle">
            Browse through a list of fully funded residencies that we update
            regularly and find the best fit for you.
          </h2>
        </div>
      </div>
      <OpenCallsList calls={openCalls} countriesList={countriesList} typesList={typesList} />
    </div>
  )
}
