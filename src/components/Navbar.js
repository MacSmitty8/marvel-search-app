import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <a href="about">About</a>
                </li> */}
            </ul>
        </nav>
    </header>
  )
}
