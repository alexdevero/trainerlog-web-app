import * as React from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'

import { Button } from './../../components/button'
import { colors, defaultStyles, View } from './../../components/constants'
import { ErrorMessage, Fieldset, Input, Label } from './../../components/form-elements'
import { HeadingH6 } from './../../components/typography'

import { ReactComponent as Logo } from './../../images/trainerlog-logo-new.svg'

interface BetaCardInterface {
  alreadyHaveAccount: () => void;
}

export const BetaCardWrapper = styled(View)`
  padding-right: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  min-width: 280px;
  width: 100%;
  max-width: 360px;
`

const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
  margin-bottom: 20px;
`

const ForgotPasswordHeading = styled(HeadingH6)`
  margin: 0 0 16px;
  text-align: center;
`

const ForgotPasswordInfo = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
`

const RememberPassword = styled.button`
  padding: 0;
  font-size: 12px;
  text-align: right;
  color: #999;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: color ${defaultStyles.transitionPart};

  &:hover {
    color: ${colors.blue};
  }

  &:focus {
    outline: 0;
  }
`

export const BetaCard = (props: BetaCardInterface) => {
  const [email, setEmail] = React.useState('')
  const [userEmailError, setUserEmailError] = React.useState(false)

  const handleBetaSignUp = async () => {
    if (email.length !== 0) {
      setUserEmailError(false)

      // TODO: Send register email
      toast.success('You are in!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    } else {
      setUserEmailError(true)
    }
  }

  const handleKeypress = (event: any) => {
    if (event.keyCode === 13) {
      handleBetaSignUp()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keypress', handleKeypress)

    return () => {
      window.removeEventListener('keypress', handleKeypress)
    }
  })

  return (
    <BetaCardWrapper>
      <Logo
        style={{
          display: 'block',
          margin: '12px auto 22px',
          width: 80
        }}
      />

      <ForgotPasswordHeading>Join the beta</ForgotPasswordHeading>

      <ForgotPasswordInfo>Sign up now to get early access to Trainr and we will notify you when we launch.</ForgotPasswordInfo>

      <Fieldset>
        <Label htmlFor="userEmail">Email</Label>
        <Input id="userEmail" name="userEmail" type="email" onChange={(event) => setEmail(event.target.value)} />

        {userEmailError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <ForgotPasswordWrapper>
        <RememberPassword onClick={props.alreadyHaveAccount}>Already have an account? <strong>Login</strong></RememberPassword>
      </ForgotPasswordWrapper>

      <Fieldset style={{ marginTop: 18 }}>
        <Button fullWidth primary onClick={handleBetaSignUp}>
          Sign up
        </Button>
      </Fieldset>

      {/* <ToastContainer /> */}
    </BetaCardWrapper>
  )
}
