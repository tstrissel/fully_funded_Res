import ResourcesComp from '../components/ResourcesComp/ResourcesComp'
import { getResourcesPageData } from '../lib/notion'
import type { GetStaticProps, NextPage } from 'next'

interface ResourcesProps {
  grantAndFunds: any[]
  databaseOpp: any[]
  practicalAdviceAndOpportunities: any[]
}

export const getStaticProps: GetStaticProps<ResourcesProps> = async (
  
) => {
  try {
    const { grantAndFunds, databaseOpp, practicalAdviceAndOpportunities } =
      await getResourcesPageData()

    console.log('Fetched resources data:', {
      grantAndFunds,
      databaseOpp,
      practicalAdviceAndOpportunities,
    });

    return {
      props: {
        grantAndFunds,
        databaseOpp,
        practicalAdviceAndOpportunities,
      },
      revalidate: 30,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        grantAndFunds: [],
        databaseOpp: [],
        practicalAdviceAndOpportunities: [],
      },
      revalidate: 5,
    }
  }
}

const Resources: NextPage<ResourcesProps> = ({
  grantAndFunds,
  practicalAdviceAndOpportunities,
  databaseOpp,
}) => {
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

export default Resources
