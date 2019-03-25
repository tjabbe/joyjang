import React from 'react'
import Styleframes from '../Styleframes'
import Process from '../Process'
import Vimeo from '../Vimeo'

import { Container } from './elements'

const ProjectContent = ({ data }) => {
  return (
    <Container>
      {data.map((section, index) => {
        if (section.module === 'Styleframes') {
          return <Styleframes data={section} key={index} />
        } else if (section.module === 'Process') {
          return <Process data={section} key={index} />
        } else if (section.module === 'Vimeo') {
          return <Vimeo data={section} key={index} />
        }

        return null
      })}
    </Container>
  )
}

export default ProjectContent
