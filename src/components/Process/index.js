import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import { Container, Image, SliderButton } from './elements'

class Process extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 150)
  }

  render() {
    const { module, assets } = this.props.data

    return (
      <Container>
        <span>{module}</span>
        <Carousel
          enableKeyboardControls={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <SliderButton onClick={previousSlide}>{`<`}</SliderButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <SliderButton onClick={nextSlide}>{`>`}</SliderButton>
          )}
        >
          {assets.map(asset => (
            <Image src={asset.path} key={asset.path} />
          ))}
        </Carousel>
      </Container>
    )
  }
}

export default Process
