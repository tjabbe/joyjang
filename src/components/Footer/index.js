import React from 'react'

import Social from '../Social'
import { FooterContainer } from './elements'

const Footer = () => (
  <FooterContainer>
    <span>© {new Date().getFullYear()}</span>
    <Social />
    <span>By Joy Jang</span>
  </FooterContainer>
)

export default Footer
