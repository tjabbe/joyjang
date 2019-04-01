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
        {collaborators.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <SmallTitle>
              {collaborators.length > 1 ? 'Collaborators' : 'Collaborator'}
            </SmallTitle>
            <NamesContainer>
              {collaborators.map(collaborator => (
                <li key={collaborator}>{collaborator}</li>
              ))}
            </NamesContainer>
          </div>
        )}
        {thanks.length > 0 && (
          <div>
            <SmallTitle>Special Thanks</SmallTitle>
            <NamesContainer>
              {thanks.map(thank => (
                <li key={thank}>{thank}</li>
              ))}
            </NamesContainer>
          </div>
        )}
      </RightContainer>
    </Container>
  )
}

export default ProjectDescription
