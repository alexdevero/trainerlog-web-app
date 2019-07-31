import styled from 'styled-components'

interface GridColInterface {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

// Function for calculating value for width
const getWidth = (value: number) => {
  if (!value) return

  const width: number = value / 12 * 100

  return `width: ${width}%;`
}

// Function for calculating value for flex
const getFlex = (value: number) => {
  if (!value) return

  const flex = value / 12 * 100

  return `flex: 0 0 ${flex}%;`
}

export const GridRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
`

export const GridCol = styled.div<GridColInterface>`
  padding-right: 15px;
  padding-left: 15px;

  /* Columns for mobile */
  ${(props) => (props.xs ? getFlex(props.xs) : 'flex: 0 0 100%')};
  ${(props) => (props.xs ? getWidth(props.xs) : 'width: 100%')};

  /* Columns for tablets */
  @media (min-width: 576px) {
    ${(props) => props.sm && getFlex(props.sm)};
    ${(props) => props.sm && getWidth(props.sm)};
  }

  /* Columns for small desktops */
  @media (min-width: 768px) {
    ${(props) => props.md && getFlex(props.md)};
    ${(props) => props.md && getWidth(props.md)};
  }

  /* Columns for medium desktops */
  @media (min-width: 992px) {
    ${(props) => props.lg && getFlex(props.lg)};
    ${(props) => props.lg && getWidth(props.lg)};
  }

  /* Columns for large desktops and HD devices */
  @media (min-width: 1200px) {
    ${(props) => props.xl && getFlex(props.xl)};
    ${(props) => props.xl && getWidth(props.xl)};
  }
`
