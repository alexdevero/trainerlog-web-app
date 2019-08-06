import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Wiki = () => (
  <>
    <Helmet>
      <title>Wiki | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        Wiki
        {' '}
        <span aria-label="Brain" aria-hidden={true}>
          🧠
        </span>
      </HeadingH5>
      <p>Whatever you need to know you will find i here. Knowledge database, dictionary with terms, etc.</p>
    </View>
  </>
)

export default Wiki
