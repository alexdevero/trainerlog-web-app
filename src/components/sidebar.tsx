import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface SidebarInterface {
  signOut: any
}

const SidebarWrapper = styled.aside`
  flex: 1;
  padding: 8px 0;
  background-color: #fff;
  width: 100%;
  max-width: 60px;

  @media (min-width: 768px) {
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
`

const SidebarLogo = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  line-height: 1;
  cursor: default;
  user-select: none;
  font-weight: bold;
`

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  font-size: 14px;
  color: #43486a;
  text-decoration: none;
  transition: background-color 0.25s ease-out;

  @media (max-width: 767.99px) {
    justify-content: center;
  }

  &:hover {
    background-color: #eee;
  }
`

const SidebarLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
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

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`

const SidebarIcon = styled.span`
  margin-right: 8px;
  width: 18px;
  text-align: center;
`

const SidebarLabel = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const Sidebar = (props: SidebarInterface) => {
  return (
    <SidebarWrapper>
      <nav>
        <SidebarLogo>TrainerLog</SidebarLogo>

        <ul>
          <li>
            <SidebarLink exact to="/" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-home" /> <SidebarLabel>Dashboard</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink to="/exercises" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-dumbbell" /> <SidebarLabel>Exercises</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink to="/measurements" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-weight" /> <SidebarLabel>Measurements</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink to="/reports" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-clipboard" /> <SidebarLabel>Reports</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink to="/tools" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-tools" /> <SidebarLabel>Tools</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink exact to="/wiki" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-lightbulb" /> <SidebarLabel>Wiki</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink exact to="/settings" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-cog" /> <SidebarLabel>Settings</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink exact to="/about" activeStyle={{ backgroundColor: '#eee' }}>
              <SidebarIcon className="fas fa-question-circle" /> <SidebarLabel>About</SidebarLabel>
            </SidebarLink>
          </li>

          <li>
            <SidebarLogoutBtn onClick={props.signOut}>
              <SidebarIcon className="fas fa-sign-out-alt" /> <SidebarLabel>Log out</SidebarLabel>
            </SidebarLogoutBtn>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

export default Sidebar
