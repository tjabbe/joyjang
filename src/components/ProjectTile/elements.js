import styled from 'styled-components'
import { Link } from 'gatsby'

const Tile = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  color: white;
  height: 300px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 550px) {
    height: 200px;
  }

  @media screen and (min-width: 769px) {
    height: 250px;
    width: 50%;
  }

  @media screen and (min-width: 1025px) {
    height: 400px;
  }
`

const Client = styled.span`
  display: block;
  font-style: italic;
  margin-bottom: 8px;
`

const ProjectName = styled.span`
  display: block;
  font-size: 24px;
`

const Type = styled.span`
  display: block;
  font-style: italic;
  left: 40px;
  position: absolute;
  bottom: 40px;
`

const TopContainer = styled.div`
  left: 40px;
  position: absolute;
  top: 40px;
`

const ProjectLink = styled(Link)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`

export { Tile, Client, ProjectName, Type, TopContainer, ProjectLink }
