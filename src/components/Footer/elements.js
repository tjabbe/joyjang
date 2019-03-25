import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: white;
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1600px;
  padding: 50px 40px;
  width: 90%;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }

  @media screen and (min-width: 769px) {
    padding: 60px 80px;
  }
`

const SocialContainer = styled.div`
  @media screen and (max-width: 550px) {
    margin: 30px 0;
  }
`

export { FooterContainer, Inner, SocialContainer }
