import React from 'react'

import Layout from '../components/layout'
import AboutLayout from '../components/AboutLayout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout noFooter>
    <SEO title="About" />
    <AboutLayout />
  </Layout>
)

export default AboutPage
