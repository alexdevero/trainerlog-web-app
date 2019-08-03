import * as React from 'react'
import styled from 'styled-components'

const PageLayout = styled.section`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
`

const Layout = ({ children }: any) => {
  return <PageLayout>{children}</PageLayout>
}

export default Layout
