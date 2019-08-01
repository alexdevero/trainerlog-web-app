import styled, { css } from 'styled-components'

import { colors, defaultStyles } from './constants'

type ButtonProps = {
  danger?: boolean
  fullWidth?: boolean
  primary?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  width: ${props => (props.fullWidth ? '100%' : '')};
  text-align: center;
  color: ${colors.white};
  border: 0;
  border-radius: 35px;
  cursor: pointer;
  transition: all ${defaultStyles.transitionPart};

  ${props =>
    props.primary &&
    css`
      background-color: ${colors.blue};
      box-shadow: 0 4px 8px rgba(0, 123, 255, .45);

      &:hover {
        background-color: ${colors.blueHover};
      }
    `}

  ${props => props.danger && css`
    background-color: ${colors.red};
    box-shadow: 0 4px 8px rgba(228, 23, 73, .45);

    &:hover {
      background-color: ${colors.redHover};
    }
  `}

  ${props => props.disabled && css`
    background-color: ${colors.grayDark};
    cursor: default;
    opacity: .5;
  `}
`
