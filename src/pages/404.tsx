import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | TrainerLog</title>
      </Helmet>

      <View>
        <HeadingH5 style={{ marginTop: 0 }}>
          404 ... This should not happen
          {' '}
          <span aria-label="Thinking" aria-hidden={true}>
            🤔
          </span>
        </HeadingH5>

      </View>
    </>
  )
}

export default PageNotFound
