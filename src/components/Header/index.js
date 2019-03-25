import React from 'react'
import { Link } from 'gatsby'

import { HeaderContainer, HeaderLink } from './elements'

const Header = ({ isHome }) => (
  <HeaderContainer isHome={isHome}>
    <Link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.6 79.79">
        <title>Joy Jang Logo</title>
        <g>
          <g>
            <circle cx="34.32" cy="7.28" r="7.28" />
            <path d="M21.32 79.79a20.26 20.26 0 0 1-9.79-2.48A23 23 0 0 1 0 58.25a7.25 7.25 0 0 1 14.48-.69 8.62 8.62 0 0 0 4 7.06 6.34 6.34 0 0 0 6.64-.6 4.62 4.62 0 0 0 1.58-3.41 72.88 72.88 0 0 0 .3-10.33c-.05-1.77-.09-3.54-.09-5.29 0-5.73 0-11.47.06-17.21a7.25 7.25 0 0 1 7.25-7.21 7.25 7.25 0 0 1 7.21 7.28q0 8.59-.05 17.18c0 1.62 0 3.25.07 4.88a84.11 84.11 0 0 1-.3 12.43 19 19 0 0 1-7 13.07 20.71 20.71 0 0 1-12.83 4.38z" />
          </g>
        </g>
      </svg>
    </Link>
    <HeaderLink to="/about" isHome={isHome}>
      About
    </HeaderLink>
  </HeaderContainer>
)

export default Header
