import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css, createGlobalStyle } from 'styled-components'

import { breakpoints } from './../components/constants'

import { ReactComponent as Logo } from './../images/trainerlog-logo-new.svg'

interface SidebarInterface {
  isSidebarVisible: boolean;
  signOut: any
}

interface SidebarWrapperInterface {
  isSidebarVisible: boolean;
}

const NewGlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
`

const SidebarWrapper = styled.aside<SidebarWrapperInterface>`
  position: fixed;
  top: 60px;
  left: 0;
  flex: 1;
  padding: 8px 0;
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 60px);
  display: none;

  @media (min-width: ${breakpoints.sm}) {
    display: block;
    position: static;
    max-width: 80px;
    height: initial;
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 180px;
  }

  nav,
  ul {
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ${props => props.isSidebarVisible && css`
    display: block;
  `}

  @media (max-width: 575.98px) {
    ul {
      min-height: 480px;
    }

    nav {
      overflow-y: auto;
    }
  }
`

const SidebarLogo = styled.div`
  display: none;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  line-height: 1;
  cursor: default;
  user-select: none;
  font-size: 18px;
  font-weight: bold;

  span {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-start;

    svg {
      margin-right: 8px;
    }

    span {
      display: block;
    }
  }
`

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  font-size: 14px;
  color: #43486a;
  text-decoration: none;
  transition: background-color 0.25s ease-out;

  @media (max-width: 767.99px) {
    justify-content: center;
  }

  @media (max-width: 575.98px) {
    justify-content: flex-start;
    font-size: 16px;
    font-weight: bold;
  }

  &:hover {
    background-color: #eee;
    text-decoration: none;
  }
`

const SidebarLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  width: 100%;
  font-size: 14px;
  color: #43486a;
  text-decoration: none;
  background-color: transparent;
  border: 0;
  transition: background-color 0.25s ease-out;

  @media (max-width: 767.99px) {
    justify-content: center;
  }

  @media (max-width: 575.98px) {
    justify-content: flex-start;
    font-size: 16px;
    font-weight: bold;
  }

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`

const SidebarIcon = styled.span`
  margin-right: 8px;
  width: 18px;
  text-align: center;

  @media (max-width: 575.98px) {
    margin-right: 6px;
  }
`

const SidebarLabel = styled.span`
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const Sidebar = (props: SidebarInterface) => {
  return (
    <>
      {props.isSidebarVisible && <NewGlobalStyle />}

      <SidebarWrapper isSidebarVisible={props.isSidebarVisible}>
        <nav>
          <SidebarLogo>
            <Logo
              style={{
                display: 'block',
                width: 20
              }}
            />
            {' '}
            <span>TrainerLog</span>
          </SidebarLogo>

          <ul>
            <li>
              <SidebarLink exact to="/" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-home" />
                {' '}
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink to="/exercises" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-dumbbell" />
                {' '}
                <SidebarLabel>Exercises</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink to="/measurements" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-weight" />
                {' '}
                <SidebarLabel>Measurements</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink to="/reports" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-clipboard" />
                {' '}
                <SidebarLabel>Reports</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink to="/tools" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-tools" />
                {' '}
                <SidebarLabel>Tools</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink exact to="/wiki" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-lightbulb" />
                {' '}
                <SidebarLabel>Wiki</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink exact to="/settings" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-cog" />
                {' '}
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLink exact to="/about" activeStyle={{ backgroundColor: '#eee' }}>
                <SidebarIcon className="fas fa-question-circle" />
                {' '}
                <SidebarLabel>About</SidebarLabel>
              </SidebarLink>
            </li>

            <li>
              <SidebarLogoutBtn onClick={props.signOut}>
                <SidebarIcon className="fas fa-sign-out-alt" />
                {' '}
                <SidebarLabel>Log out</SidebarLabel>
              </SidebarLogoutBtn>
            </li>
          </ul>
        </nav>
      </SidebarWrapper>
    </>
  )
}

export default Sidebar
