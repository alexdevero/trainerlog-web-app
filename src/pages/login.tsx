import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { colors, View } from './../components/constants'
import { ForgotPasswordCard } from './login/card-forgot'
import { SignInCard } from './login/card-sign-in'
import { SignUpCard } from './login/card-sign-up'

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
  const [showSignUpCard, setShowSignUpCard] = React.useState(false)

  const forgotPassword = () => {
    setShowForgotCard(!showForgotCard)
  }

  const noAccount = () => {
    setShowSignUpCard(!showSignUpCard)
  }

  const renderView = () => {
    if (!showForgotCard && !showSignUpCard) {
      return (
        <SignInCard
          signIn={signIn}
          forgotPassword={forgotPassword}
          noAccount={noAccount}
        />
      )
    } else if (showForgotCard) {
      return (
        <ForgotPasswordCard
          rememberPassword={forgotPassword}
        />
      )
    } else {
      return (
        <SignUpCard
          alreadyHaveAccount={noAccount}
        />
      )
    }
  }

  return (
    <>
      <Helmet>
        <title>Login | TrainerLog</title>
      </Helmet>

      <LoginView>
        {renderView()}
      </LoginView>
    </>
  )
}

export default Login
