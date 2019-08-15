import * as React from 'react'
import styled from 'styled-components'

import { colors, defaultStyles, Typography } from './constants'

export const Fieldset = styled.fieldset`
  padding: 0;
  border: 0;

  & + & {
    margin-top: 12px;
  }
`

export const Input = styled.input`
  display: block;
  padding: 8px;
  width: 100%;
  color: ${colors.black};
  background-color: ${colors.white};
  border: 1px solid ${colors.grayMedium};
  border-radius: ${defaultStyles.borderRadius};

  &:focus {
    border: 1px solid ${colors.blue};
    outline: 0;
  }
`

export const Label = styled.label`
  margin-bottom: 0;
  font-size: ${Typography.smaller};
  font-weight: 700;
  color: ${colors.grayDark};

  & + input,
  & + select {
    margin-top: 2px;
  }
`

export const ErrorMessage = styled.div`
  font-size: ${Typography.smaller};
  color: ${colors.red};

  input + & {
    margin-top: 4px;
  }
`

// Select
export const Select = styled.select`
  display: block;
  padding: 8px;
  width: 100%;
  color: ${colors.grayDark};
  background-color: ${colors.white};
  border: 1px solid ${colors.grayMedium};
  border-radius: ${defaultStyles.borderRadius};

  &:focus {
    border: 1px solid ${colors.blue};
  }
`

// Checkbox
interface StyledCheckboxInterface {
  checked?: boolean;
}

interface CheckboxPropsInterface {
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  checked?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: () => void;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide checkbox visually but remain accessible to screen readers. */
  /* Source: https://polished.js.org/docs/#hidevisually */
  position: absolute;
  overflow: hidden;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);

  &:focus + div {
    box-shadow: 0 0 0 3px ${colors.blue};
  }
`

const CheckboxIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  fill: none;
  stroke: #fff;
  stroke-width: 3px;
`

const StyledCheckbox = styled.div<StyledCheckboxInterface>`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? colors.blue : '#eee'};
  border-radius: 3px;
  transition: all 150ms;

  ${CheckboxIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`

const CheckboxLabel = styled.span`
  font-size: 14px;
  cursor: default;
  user-select: none;

  div + & {
    margin-left: 6px;
  }
`

export const Checkbox = (props: CheckboxPropsInterface) => (
  <CheckboxContainer
    className={props.className}
    onClick={props.onChange}
  >
    <HiddenCheckbox
      checked={props.checked}
      id="dashboard-settings-body-weight"
      type="checkbox"
      onChange={props.onChange}
    />

    <StyledCheckbox checked={props.checked}>
      <CheckboxIcon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </CheckboxIcon>
    </StyledCheckbox>

    {props.label && <CheckboxLabel>{props.label}</CheckboxLabel>}
  </CheckboxContainer>
)

// Input + prepend
// interface InputPrependPropsInterface {
//   className?: string;
//   disabled?: boolean;
//   hidden?: boolean;
//   id?: string;
//   label?: string;
//   name?: string;
//   placeholder?: string;
//   prepend?: string;
//   type?: string;
//   onChange?: () => void;
// }

// export const InputPrepend = (props: InputPrependPropsInterface) => (
//   <div className={props.className}>
//     <div>
//       <div>{props.prepend}</div>
//     </div>

//     <input type={props.type} id={props.id} placeholder={props.placeholder} />
//   </div>
// )
