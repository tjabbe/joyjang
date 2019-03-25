import { createGlobalStyle } from "styled-components"

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Apercu';
    src: url('/fonts/Apercu-Italic.woff2') format('woff2'),
        url('/fonts/Apercu-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Agipo';
    src: url('/fonts/Agipo-Regular.woff2') format('woff2'),
        url('/fonts/Agipo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu-Mono';
    src: url('/fonts/Apercu-Mono.woff2') format('woff2'),
        url('/fonts/Apercu-Mono.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu';
    src: url('/fonts/Apercu.woff2') format('woff2'),
        url('/fonts/Apercu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
export default Fonts
