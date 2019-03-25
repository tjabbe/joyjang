import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => (props.isHome ? '#000' : '#d7d8d8')};
    font-family: "Apercu";
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    margin: auto;
    max-width: 1400px;
    padding: 0 20px;
    position: relative;
    width: 90%;
  }
`

export default Base
