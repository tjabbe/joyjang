import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectTile from '../ProjectTile'

import { TilesContainer } from './elements'

const ProjectsList = () => (
  <StaticQuery
    query={projectsQuery}
    render={data => <TilesContainer>{getProjects(data)}</TilesContainer>}
  />
)

const getProjects = data => {
  const projects = []

  data.allProjectsJson.edges.forEach(project =>
    projects.push(<ProjectTile data={project.node} key={project.node.client} />)
  )

  return projects
}

const projectsQuery = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          projectPath
          tilePath
          client
          shortTitle
          workType
        }
      }
    }
  }
`

export default ProjectsList
