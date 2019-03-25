import React from 'react'

import { Container, Image, MultipleContainer, SmallImage } from './elements'

const Styleframes = ({ data }) => {
  const { module, assets, layout } = data

  return (
    <Container>
      <span>{module}</span>
      <div>
        {layout === 'one' &&
          assets.map(asset => <Image src={asset.path} key={asset.path} />)}
        {layout === 'multiple' && (
          <MultipleContainer>
            {assets.map(asset => (
              <SmallImage src={asset.path} key={asset.path} />
            ))}
          </MultipleContainer>
        )}
      </div>
    </Container>
  )
}

export default Styleframes
