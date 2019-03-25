import React from 'react'

import Social from '../Social'
import { FooterContainer, Inner, SocialContainer } from './elements'

const Footer = () => (
  <FooterContainer>
    <Inner>
      <span>© {new Date().getFullYear()}</span>
      <SocialContainer>
        <Social />
      </SocialContainer>
      <span>By Joy Jang</span>
    </Inner>
  </FooterContainer>
)

export default Footer
