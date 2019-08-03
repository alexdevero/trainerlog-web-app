import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Reports = () => (
  <>
    <Helmet>
      <title>Reports | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>
        Reports
        {' '}
        <span aria-label="Reports" aria-hidden={true}>
          📑
        </span>
      </HeadingH5>

      <p>Weekly, monthly and yearly reports to help you track your progress.</p>
    </View>
  </>
)

export default Reports
