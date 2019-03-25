import React from 'react'

import {
  Tile,
  TileBackground,
  Client,
  ProjectName,
  Type,
  TopContainer,
  ProjectLink,
} from './elements'

const ProjectTile = ({ data }) => (
  <Tile>
    <ProjectLink to={data.projectPath} />
    <TileBackground background={data.tilePath} />
    <TopContainer>
      <Client>{data.client}</Client>
      <ProjectName>{data.shortTitle}</ProjectName>
    </TopContainer>
    <Type>{data.workType}</Type>
  </Tile>
)

export default ProjectTile
