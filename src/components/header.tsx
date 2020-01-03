import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'

import { breakpoints, colors, defaultStyles } from './constants'

interface HeaderInterface {
  isSidebarVisible: boolean;
  handleSidebarToggle: () => void;
}

interface HeaderTogglerInterface {
  isSidebarVisible: Boolean;
}

const HeaderEl = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  color: ${colors.black};

  &:hover {
    text-decoration: none;
  }

  svg {
    margin-right: 6px;
  }
`

const HeaderMenuToggler = styled.button<HeaderTogglerInterface>`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding: 0;
  width: 26px;
  height: 20px;
  border: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  span {
    position: relative;
    transition: all ${defaultStyles.transitionPart};
  }

  ${props => props.isSidebarVisible && css`
    span:first-of-type {
      top: 9px;
      transform: rotate(45deg);
    }

    span:nth-of-type(2) {
      display: none;
    }

    span:last-of-type {
      top: -9px;
      transform: rotate(-45deg);
    }
  `}
`

const MenuTogglerBar = styled.span`
  display: block;
  width: 26px;
  height: 2px;
  background-color: ${colors.black};
`

const Header = (props: HeaderInterface) => {
  return (
    <HeaderEl>
      <HeaderNav>
        <HeaderLogo to="/">
          <ReactSVG
            src={require('./../images/trainerlog-logo-new.svg')}
            beforeInjection={svg => {
              svg.classList.add('header__logo')
              svg.setAttribute('style', 'display: block; width: 26px;')
            }}
          />
          TL
        </HeaderLogo>

        <HeaderMenuToggler isSidebarVisible={props.isSidebarVisible} onClick={props.handleSidebarToggle}>
          <MenuTogglerBar />
          <MenuTogglerBar />
          <MenuTogglerBar />
        </HeaderMenuToggler>
      </HeaderNav>
    </HeaderEl>
  )
}

export default Header
