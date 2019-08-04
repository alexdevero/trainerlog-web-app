import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Measurements = () => (
  <>
    <Helmet>
      <title>Measurements | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        Measurements
        {' '}
        <span aria-label="Scale" aria-hidden={true}>
          ⚖
        </span>
      </HeadingH5>
      <p>Measurements for for weight, height, body fat and also body parts, i.e. biceps, triceps, abs, legs, etc. Helps you measure your progress.</p>
    </View>
  </>
)

export default Measurements
