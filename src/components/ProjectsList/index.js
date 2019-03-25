import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectTile from '../ProjectTile'

import { TilesContainer } from './elements'

const ProjectsList = () => (
  <StaticQuery
    query={projectsQuery}
    render={data => (
      <TilesContainer>
        {data.allProjectItemsJson.edges.map(project => (
          <ProjectTile data={project.node} key={project.node.client} />
        ))}
      </TilesContainer>
    )}
  />
)

const projectsQuery = graphql`
  query ProjectsQuery {
    allProjectItemsJson {
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
