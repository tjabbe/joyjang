import React from 'react'

import { IframeContainer } from './elements'

const Vimeo = ({ data }) => {
  const { videoId } = data

  return (
    <IframeContainer>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        width="640"
        height="360"
        frameborder="0"
        title="Video presentation"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </IframeContainer>
  )
}

export default Vimeo
