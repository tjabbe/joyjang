import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1600px;
  padding: 50px 40px;
  width: 90%;

  svg {
    fill: ${props => (props.isHome ? '#fff' : '#000')};
    transition: fill 0.2s;
    width: 28px;

    &:hover {
      fill: #4f2fc5;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 60px 80px;
  }
`

const HeaderLink = styled(Link)`
  color: ${props => (props.isHome ? '#fff' : '#000')};
  font-family: 'Apercu';
  font-size: 20px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4f2fc5;
  }
`

export { HeaderContainer, HeaderLink }
