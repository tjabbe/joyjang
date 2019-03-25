import React from 'react'
import PropTypes from 'prop-types'

import Reset from '../styles/reset'
import Fonts from '../styles/fonts'
import Base from '../styles/base'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, noFooter, page }) => {
  const isHome = page === '/'

  return (
    <>
      <Reset />
      <Fonts />
      <Base isHome={isHome} />
      <Header isHome={isHome} />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
}

export default Layout
