import * as React from 'react'
import styled from 'styled-components'

const FooterEl = styled.footer`
  padding-top: 18px;
  padding-bottom: 18px;
`

const SocialMediaList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 0 12px;
  padding: 0;
  list-style-type: none;

  li + li {
    margin-left: 12px;
  }

  a {
    color: #43486a;
    font-size: 18px;
    transition: color 0.25s ease-out;

    &:hover {
      color: #111;
    }
  }
`

const Copyright = styled.p`
  margin: 0;
  font-size: 11px;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterEl>
      <SocialMediaList>
        <li>
          <a href="https://github.com/alexdevero/trainerlog-web-app" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-github" />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/deveroio" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-instagram" />
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/deverocorp" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-facebook-square" />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/deverocorp" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-twitter" />
          </a>
        </li>
      </SocialMediaList>

      <Copyright className="footer__copy mt-3 text--center">Copyright &copy;{new Date().getFullYear()} Devero. All rights reserved.</Copyright>
    </FooterEl>
  )
}

export default Footer
