import * as React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">TrainerLog</Link>
      </nav>
    </header>
  )
}

export default Header
