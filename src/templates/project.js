import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectIntro from '../components/ProjectIntro'
import ProjectContent from '../components/ProjectContent'

import { ProjectWrapper } from './elements'

const Project = props => {
  const { project } = props.pageContext

  return (
    <Layout>
      <SEO title={project.title} />
      <ProjectWrapper>
        <ProjectIntro data={project} />
        <ProjectContent data={project.content} />
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
