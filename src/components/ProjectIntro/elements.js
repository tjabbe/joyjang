import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`

const ImageContainer = styled.div`
  height: 25vh;
  margin-bottom: 50px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export { Container, Image, ImageContainer }
