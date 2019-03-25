import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    display: block;
  }
`

const LeftContainer = styled.div`
  max-width: 240px;
`

const MiddleContainer = styled.div`
  margin: 0 30px;
  max-width: 700px;
`

const RightContainer = styled.div`
  max-width: 200px;
`

const SmallTitle = styled.span`
  font-size: 15px;
  font-style: italic;
`

const ProjectName = styled.span`
  font-size: 20px;
  margin: 16px 0;
`

const Description = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin-top: 16px;
`

const NamesContainer = styled.ul`
  margin-top: 16px;
`

export {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  SmallTitle,
  Description,
  ProjectName,
  NamesContainer,
}
