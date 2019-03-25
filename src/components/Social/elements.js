import styled from 'styled-components'

const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
`

const SocialLink = styled.li`
  &:not(:last-child) {
    margin-right: 80px;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`

export { SocialContainer, SocialLink }
