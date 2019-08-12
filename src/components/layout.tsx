import * as React from 'react'
import styled from 'styled-components'

import { breakpoints, colors } from './constants'

const PageLayout = styled.section`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  padding-top: 60px;
  background-color: ${colors.gray};

  @media (min-width: ${breakpoints.sm}) {
    flex-flow: row nowrap;
    padding-top: 0;
  }
`

const Layout = ({ children }: any) => {
  return <PageLayout>{children}</PageLayout>
}

export default Layout
