import * as React from 'react'
import styled from 'styled-components'

import { Button } from './../../components/button'
import { colors, defaultStyles, View } from './../../components/constants'
import { ErrorMessage, Fieldset, Input, Label } from './../../components/form-elements'
import { HeadingH6 } from './../../components/typography'

interface SignUpCardInterface {
  alreadyHaveAccount: () => void;
}

export const SignInCardWrapper = styled(View)`
  min-width: 280px;
`

const SignInCardHeading = styled(HeadingH6)`
  margin: 0 0 16px;
  text-align: center;
`

const AlreadyHaveAccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`

const AlreadyHaveAccount = styled.button`
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

export const SignUpCard = (props: SignUpCardInterface) => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstNameError, setFirstNameError] = React.useState(false)
  const [lastNameError, setLastNameError] = React.useState(false)
  const [userNameError, setUserNameError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)

  const handleSignUp = async () => {
    if (firstName.length !== 0 && lastName.length !== 0 && username.length !== 0 && password.length !== 0) {
      setFirstNameError(false)
      setLastNameError(false)
      setUserNameError(false)
      setPasswordError(false)

      // TODO: Create user account
    }
  }

  const handleInput = (event: any) => {
    if (event.target.dataset.input === 'signUpFirstName') {
      setFirstName(event.target.value)
    } else if (event.target.dataset.input === 'signUpLastName') {
      setLastName(event.target.value)
    } else if (event.target.dataset.input === 'signUpUsername') {
      setUsername(event.target.value)
    } else if (event.target.dataset.input === 'signUpPassword') {
      setPassword(event.target.value)
    }
  }

  return (
    <SignInCardWrapper>
      <SignInCardHeading>Sign In</SignInCardHeading>

      <Fieldset>
        <Label htmlFor="signUpFirstName">First name:</Label>
        <Input data-input="signUpFirstName" id="signUpFirstName" name="signUpFirstName" type="text" onChange={handleInput} />

        {firstNameError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <Label htmlFor="signUpLastName">Last name:</Label>
        <Input data-input="signUpLastName" id="signUpLastName" name="signUpLastName" type="text" onChange={handleInput} />

        {lastNameError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <Label htmlFor="signUpUsername">Username:</Label>
        <Input data-input="signUpUsername" id="signUpUsername" name="signUpUsername" type="text" onChange={handleInput} />

        {userNameError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <Fieldset>
        <Label htmlFor="signUpPassword">Password:</Label>
        <Input data-input="signUpPassword" id="signUpPassword" name="signUpPassword" type="password" onChange={handleInput} />

        {passwordError && <ErrorMessage>This field is required.</ErrorMessage>}
      </Fieldset>

      <Fieldset style={{ marginTop: 18 }}>
        <Button fullWidth primary onClick={handleSignUp}>
          Sign up
        </Button>
      </Fieldset>

      <AlreadyHaveAccountWrapper>
        <AlreadyHaveAccount onClick={props.alreadyHaveAccount}>Already have an account?</AlreadyHaveAccount>
      </AlreadyHaveAccountWrapper>
    </SignInCardWrapper>
  )
}
