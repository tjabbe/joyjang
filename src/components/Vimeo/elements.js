import styled from 'styled-components'

const IframeContainer = styled.div`
  margin-bottom: 100px;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export { IframeContainer }
