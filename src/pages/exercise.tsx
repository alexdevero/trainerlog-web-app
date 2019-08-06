import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HeadingH5 } from './../components/typography'

const View = styled.section``

const Exercise = ({ match, props }: any) => (
  <>
    <Helmet>
      <title>Exercise: {match.params.exercise} | TrainerLog</title>
    </Helmet>

    <View>
      <HeadingH5 style={{ marginTop: 0 }}>Exercise {match.params.exercise}</HeadingH5>
    </View>
  </>
)

export default Exercise
