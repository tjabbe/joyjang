import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  > span {
    display: block;
    margin-bottom: 30px;
  }
`

const Image = styled.img`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const MultipleContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -20px;
`

const SmallImage = styled.img`
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 500px) {
    width: 49%;
  }

  @media screen and (min-width: 769px) {
    width: 32%;
  }
`

export { Container, Image, MultipleContainer, SmallImage }
