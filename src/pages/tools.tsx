import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Tools = () => (
  <>
    <Helmet>
      <title>Tools | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        Tools
        {' '}
        <span aria-label="Hammer" aria-hidden={true}>
          🛠
        </span>
      </HeadingH5>

      <p>Tools such as macros calculator, body fat estimator, HIIT stopwatches, etc.</p>
    </View>
  </>
)


export default Tools
