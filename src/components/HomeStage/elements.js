import styled, { css } from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 176px);
  position: relative;
`

const TextContainer = styled.div`
  margin-top: -176px;
  padding: 0 40px;
`

const Text = styled.p`
  color: rgb(220, 220, 220);
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  ${props =>
    props.maxWidth &&
    css`
      max-width: 850px;
    `}
`

const ScrollArrow = styled.span`
  bottom: 50px;
  color: rgb(220, 220, 220);
  cursor: pointer;
  font-size: 70px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) rotate(90deg);
`

export { Container, Text, TextContainer, ScrollArrow }
