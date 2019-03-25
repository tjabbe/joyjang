import React from 'react'

import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  SmallTitle,
  Description,
  ProjectName,
  NamesContainer,
} from './elements'

const ProjectDescription = ({ data }) => {
  const { title, year, workType, description, thanks, collaborators } = data

  return (
    <Container>
      <LeftContainer>
        <SmallTitle>{year}</SmallTitle>
        <ProjectName>{title}</ProjectName>
        <SmallTitle>({workType})</SmallTitle>
      </LeftContainer>

      <MiddleContainer>
        <SmallTitle>Description</SmallTitle>
        <Description>{description}</Description>
      </MiddleContainer>

      <RightContainer>
        {collaborators.length > 0 && <div>Collaborators</div>}
        <div>
          <SmallTitle>Special Thanks To</SmallTitle>
          <NamesContainer>
            {thanks.map(thank => (
              <li key={thank}>{thank}</li>
            ))}
          </NamesContainer>
        </div>
      </RightContainer>
    </Container>
  )
}

export default ProjectDescription
