import React from 'react'

import { Container, Image } from './elements'

const Styleframes = ({ data }) => {
  const { module, assets } = data

  return (
    <Container>
      <span>{module}</span>
      <div>
        {assets.map(asset => (
          <Image src={asset.path} key={asset.path} />
        ))}
      </div>
    </Container>
  )
}

export default Styleframes
