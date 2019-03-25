import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeStage from '../components/HomeStage'
import ProjectsList from '../components/ProjectsList'

const IndexPage = props => {
  return (
    <Layout page={props.location.pathname}>
      <SEO title="Home" />
      <HomeStage />
      <ProjectsList />
    </Layout>
  )
}

export default IndexPage
