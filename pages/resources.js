import Image from 'next/image'
import { client } from '../lib/contentful.js'
import ResourcesComp from '../components/ResourcesComp/ResourcesComp'

export const getStaticProps = async (context) => {
  const res = await client.getEntries({ content_type: 'grantAndFunds' })
  const res2 = await client.getEntries({
    content_type: 'databaseOpp',
  })

  const res3 = await client.getEntries({
    content_type: 'practicalAdviceAndOpportunities',
  })
  return {
    props: {
      grantAndFunds: res.items,
      databaseOpp: res2.items,
      practicalAdviceAndOpportunities: res3.items,
    },
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
