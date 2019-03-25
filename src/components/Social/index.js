import React from 'react'

import { SocialContainer, SocialLink } from './elements'

const Social = () => (
  <SocialContainer>
    <SocialLink>
      <a
        href="https://www.instagram.com/_hoyyy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </SocialLink>
    <SocialLink>
      <a
        href="https://www.linkedin.com/in/joyhoy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </SocialLink>
    <SocialLink>
      <a href="mailto:hello@joyjang.com">Email</a>
    </SocialLink>
  </SocialContainer>
)

export default Social
