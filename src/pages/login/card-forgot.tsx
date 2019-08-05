import * as React from 'react'
import styled from 'styled-components'

import { Button } from './../../components/button'
import { colors, defaultStyles, View } from './../../components/constants'
import { ErrorMessage, Fieldset, Input, Label } from './../../components/form-elements'
import { HeadingH6 } from './../../components/typography'

interface ForgotPasswordInterface {
  rememberPassword: () => void;
}

export const ForgotPasswordCardWrapper = styled(View)`
  min-width: 280px;
`

const ForgotPassWordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-bottom: 16px;
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

export const ForgotPasswordCard = (props: ForgotPasswordInterface) => {
  const [email, setEmail] = React.useState('')
  const [userEmailError, setUserEmailError] = React.useState(false)

  const handleResetPassword = async () => {
    if (email.length !== 0) {
      setUserEmailError(false)

      // TODO: Send password reset mail
    } else {
      setUserEmailError(true)
    }
  }

  const handleKeypress = (event: any) => {
    if (event.keyCode === 13) {
      handleResetPassword()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keypress', handleKeypress)

    return () => {
      window.removeEventListener('keypress', handleKeypress)
    }
  })

  return (
    <ForgotPasswordCardWrapper>
      <ForgotPasswordHeading>Forgot your password?</ForgotPasswordHeading>

      <ForgotPasswordInfo>Tell us your email and we will send you a reset link.</ForgotPasswordInfo>

      <Fieldset>
        <Label htmlFor="userEmail">Email:</Label>
        <Input id="userEmail" name="userEmail" type="email" onChange={(event) => setEmail(event.target.value)} />

        {userEmailError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <ForgotPassWordWrapper>
        <RememberPassword onClick={props.rememberPassword}>Do you remember your password?</RememberPassword>
      </ForgotPassWordWrapper>

      <Fieldset style={{ marginTop: 18 }}>
        <Button fullWidth primary onClick={handleResetPassword}>
          Reset password
        </Button>
      </Fieldset>
    </ForgotPasswordCardWrapper>
  )
}
