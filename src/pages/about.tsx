import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | TrainerLog</title>
      </Helmet>

      <View>
        <HeadingH5 style={{ marginTop: 0 }}>
          About
          {' '}
          <span aria-label="Info" aria-hidden={true}>
            ℹ
          </span>
        </HeadingH5>

        <p>General information about TrainerLog.</p>
      </View>
    </>
  )
}

export default About
