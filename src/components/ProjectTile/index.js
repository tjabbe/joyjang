import React from 'react'

import {
  Tile,
  Client,
  ProjectName,
  Type,
  TopContainer,
  ProjectLink,
} from './elements'

const ProjectTile = ({ data }) => (
  <Tile background={data.tilePath}>
    <ProjectLink to={data.projectPath} />
    <TopContainer>
      <Client>{data.client}</Client>
      <ProjectName>{data.shortTitle}</ProjectName>
    </TopContainer>
    <Type>{data.workType}</Type>
  </Tile>
)

export default ProjectTile
