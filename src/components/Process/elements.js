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

  .slider-control-bottomcenter {
    display: none;
  }

  .slider-control-centerleft {
    @media screen and (min-width: 768px) {
      left: -50px !important;
    }
  }

  .slider-control-centerright {
    @media screen and (min-width: 768px) {
      right: -50px !important;
    }
  }
`

const Image = styled.img`
  width: 100%;
`

const SliderButton = styled.button`
  background: 0;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 30px;
  outline: 0;
  padding: 0;
  position: relative;

  @media screen and (min-width: 768px) {
    color: black;
    font-size: 70px;
  }
`

export { Container, Image, SliderButton }
