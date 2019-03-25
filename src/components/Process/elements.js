import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 120px;

  > span {
    display: block;
    margin-bottom: 30px;
  }

  .slider-control-bottomcenter {
    display: none;
  }

  .slider-control-centerleft {
    left: -50px !important;
  }

  .slider-control-centerright {
    right: -50px !important;
  }
`

const Image = styled.img`
  width: 100%;
`

const SliderButton = styled.button`
  background: 0;
  border: 0;
  color: black;
  cursor: pointer;
  font-size: 70px;
  outline: 0;
  padding: 0;
`

export { Container, Image, SliderButton }
