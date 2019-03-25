import React from 'react'

import Social from '../Social'
import { FooterContainer, Inner } from './elements'

const Footer = () => (
  <FooterContainer>
    <Inner>
      <span>© {new Date().getFullYear()}</span>
      <Social />
      <span>By Joy Jang</span>
    </Inner>
  </FooterContainer>
)

export default Footer
