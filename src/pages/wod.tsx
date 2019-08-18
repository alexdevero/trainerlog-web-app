import * as React from 'react'
import Helmet from 'react-helmet'

import { HeadingH5 } from './../components/typography'
import { View } from './../components/constants'

const Wod = ({ match, props }: any) => (
  <>
    <Helmet>
      <title>WOD: {match.params.exercise} | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>WOD  {match.params.exercise}</HeadingH5>
    </View>
  </>
)


export default Wod
