import ResourcesComp from '../components/ResourcesComp/ResourcesComp'
import { getResourcesPageData } from '../lib/notion'

export const getStaticProps = async (context) => {
  const { grantAndFunds, databaseOpp, practicalAdviceAndOpportunities } = 
    await getResourcesPageData();

  return {
    props: {
      grantAndFunds,
      databaseOpp,
      practicalAdviceAndOpportunities
    },
    revalidate: 30
  }
}

export default function resources({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) {
  return (
    <div>
      <div className="titleContainer">
        <div>
          <h1 className="pageTitle">Resources</h1>
          <h2 className="pageSubtitle">
            FFR compiled a list of useful links, including ongoing grants and
            funds, professional advice, best and worst practices of art
            institutions and more.
          </h2>
        </div>
      </div>
      <ResourcesComp
        grantAndFunds={grantAndFunds}
        practicalAdviceAndOpportunities={practicalAdviceAndOpportunities}
        databaseOpp={databaseOpp}
      />
    </div>
  )
}
