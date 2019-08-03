import * as React from 'react'
import styled from 'styled-components'

import { colors, defaultStyles, View } from './../../components/constants'
import { Button } from './../../components/button'
import { ErrorMessage, Fieldset, Input, Label } from './../../components/form-elements'

import { setCurrentSessionData } from './../../utils/local-storage'

interface LoginCardInterface {
  forgotPassword: () => void;
  signIn: () => void;
}

export const LoginCardWrapper = styled(View)`
  min-width: 280px;
`

const ForgotPassWordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-bottom: 16px;
`

const ForgotPassWord = styled.button`
  padding: 0;
  font-size: 12px;
  text-align: right;
  color: #111;
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

export const LoginCard = (props: LoginCardInterface) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [usernameError, setUsernameError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)

  const handleSignIn = async () => {
    if (username.length !== 0 && password.length !== 0) {
      setUsernameError(false)
      setPasswordError(false)

      const loginData = await {
        username: username,
        password: password
      }

      await setCurrentSessionData('trainerlog-login', loginData)

      await props.signIn()
    } else if (username.length === 0 && password.length === 0) {
      setUsernameError(true)
      setPasswordError(true)
    } else if (username.length === 0) {
      setUsernameError(true)
    } else if (password.length === 0) {
      setPasswordError(true)
    }
  }

  const handleInput = (event: any) => {
    if (event.target.dataset.input === 'username') {
      setUsername(event.target.value)
    } else {
      setPassword(event.target.value)
    }
  }

  return (
    <LoginCardWrapper>
      <Fieldset>
        <Label htmlFor="userUsername">Username:</Label>
        <Input data-input="username" id="userUsername" name="userUsername" type="text" onChange={handleInput} />

        {usernameError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <Label htmlFor="userPassword">Password:</Label>
        <Input data-input="password" id="userPassword" name="userPassword" type="password" onChange={handleInput} />

        {passwordError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <ForgotPassWordWrapper>
        <ForgotPassWord>Forgot your password?</ForgotPassWord>
      </ForgotPassWordWrapper>

      <Fieldset>
        <Button fullWidth primary onClick={handleSignIn}>
          Login
        </Button>
      </Fieldset>
    </LoginCardWrapper>
  )
}
