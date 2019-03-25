import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = props => {
  return (
    <Layout page={props.location.pathname}>
      <SEO title="Home" />
      <h1>Hello Homepage</h1>
    </Layout>
  )
}

export default IndexPage
