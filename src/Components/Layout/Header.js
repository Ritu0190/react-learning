import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav>
          <ul>
            <li>
                <Link to="/filtering">Filtering</Link>
            </li>
            <li>
                <Link to="/carts">Cart</Link>
            </li>
            <li>
                <Link to="/moviefilter">Movie Fiter</Link>
            </li>
            <li>
                <Link to="/todo">Todo App</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header