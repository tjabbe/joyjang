import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin: 0 auto 60px;
  width: 70%;

  @media screen and (min-width: 550px) {
    width: 400px;
  }
`

const TextContainer = styled.div`
  font-size: 18px;
  line-height: 24px;
  margin: auto;
  max-width: 550px;
  text-align: center;

  p {
    margin: auto;
    width: 85%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const SocialContainer = styled.div`
  margin: 100px 0;
  text-align: center;
`

export { Image, TextContainer, SocialContainer }
