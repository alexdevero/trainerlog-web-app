import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { colors, View } from './../components/constants'
import { LoginCard } from './login/card-login'

const LoginView = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  background: ${colors.gray};
  box-shadow: none;
`

const Login = ({ signIn }: any) => {
  const [showForgotCard, setShowForgotCard] = React.useState(false)

  const forgotPassword = () => {
    setShowForgotCard(true)
  }

  return (
    <>
      <Helmet>
        <title>Login | TrainerLog</title>
      </Helmet>

      <LoginView>
        {!showForgotCard && (
          <LoginCard
            signIn={signIn}
            forgotPassword={forgotPassword}
          />
        )}
      </LoginView>
    </>
  )
}

export default Login
