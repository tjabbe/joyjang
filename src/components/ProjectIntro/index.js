import React from 'react'

import { Container, Image, ImageContainer } from './elements'
import ProjectDescription from '../ProjectDescription'

const ProjectIntro = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.stagePicture} />
      </ImageContainer>
      <ProjectDescription data={data} />
    </Container>
  )
}

export default ProjectIntro
