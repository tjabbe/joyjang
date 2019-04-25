import React from 'react'

import {
  Container,
  Image,
  MultipleContainer,
  SmallImage,
  OneContainer,
} from './elements'

const Styleframes = ({ data }) => {
  const { moduleTitle, assets } = data

  return (
    <Container>
      <span>{moduleTitle}</span>
      {assets.length > 1 && (
        <MultipleContainer>
          {assets.map(asset => (
            <SmallImage src={asset.path} key={asset.path} />
          ))}
        </MultipleContainer>
      )}
      <OneContainer>
        {assets.map(asset => (
          <Image src={asset.path} key={asset.path} />
        ))}
      </OneContainer>
    </Container>
  )
}

export default Styleframes
