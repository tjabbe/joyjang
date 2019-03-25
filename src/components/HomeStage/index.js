import React from 'react'

import { Container, Text, TextContainer, ScrollArrow } from './elements'

const HomeStage = () => (
  <Container>
    <TextContainer>
      <Text>Hello !</Text>
      <Text maxWidth>
        My name is Joy Jang and I am a Los Angeles-based motion designer and
        illustrator, recent ArtCenter graduate, and explorer of the unknown!
      </Text>
    </TextContainer>
    <ScrollArrow>></ScrollArrow>
  </Container>
)

export default HomeStage
