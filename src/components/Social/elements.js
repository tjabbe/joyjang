import styled from 'styled-components'

const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
`

const SocialLink = styled.li`
  &:not(:last-child) {
    margin-right: 40px;

    @media screen and (min-width: 769px) {
      margin-right: 80px;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.2s;
  }

  &:hover {
    a {
      color: #4f2fc5;
    }
  }
`

export { SocialContainer, SocialLink }
