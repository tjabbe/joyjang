import React from 'react'

import Social from '../Social'
import { Image, TextContainer, SocialContainer } from './elements'

// TODO: Provide image via gatsby-image
const AboutLayout = () => (
  <>
    <Image src="/images/joy.jpg" alt="Picture of Joy Jang" />
    <TextContainer>
      <p>
        Like the clay in the hands of the potter, I am constantly being molded
        and perfected to be a better designer and human being. Being malleable,
        I create work that resonates with a diverse audience using a variety of
        different skills and styles.
      </p>
      <p>
        Hi, My name is Joy Jang and I am a Los Angeles-based motion designer and
        illustrator, recent ArtCenter graduate, and explorer of the unknown.
      </p>
      <p>Let’s explore together!</p>
    </TextContainer>
    <SocialContainer>
      <Social />
    </SocialContainer>
  </>
)

export default AboutLayout
