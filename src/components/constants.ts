import styled from 'styled-components'

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

export const colors = {
  black: '#111',
  blue: '#007bff',
  blueHover: '#0069d9',
  gray: '#f0f4fa',
  grayMedium: '#ddd',
  grayDark: '#6c757d',
  red: '#e41749',
  redHover: '#b6123a',
  white: '#fff'
}

export const defaultStyles = {
  borderRadius: '4px',
  boxShadow: '0 6px 6px rgba(0, 0, 0, .05)',
  transitionPart: '.25s ease-in-out'
}

export const Typography = {
  headingH1: '48px',
  headingH2: '32px',
  headingH3: '24px',
  headingH4: '18px',
  headingH5: '16px',
  headingH6: '15px',
  body: '16px',
  small: '14px',
  smaller: '12px'
}

export const View = styled.section`
  padding: 16px;
  background-color: ${colors.white};
  border-radius: ${defaultStyles.borderRadius};
  box-shadow: ${defaultStyles.boxShadow};
`
