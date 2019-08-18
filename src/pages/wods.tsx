import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Wods = () => (
  <>
    <Helmet>
      <title>WODs | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        WODs
        {' '}
        <span aria-label="Hammer" aria-hidden={true}>
          🛠
        </span>
      </HeadingH5>

      <p>WODs (Workout of the Day) library.</p>
    </View>
  </>
)


export default Wods
