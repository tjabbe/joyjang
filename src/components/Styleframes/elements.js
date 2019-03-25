import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 120px;

  > span {
    display: block;
    margin-bottom: 30px;
  }
`

const Image = styled.img`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export { Container, Image }
