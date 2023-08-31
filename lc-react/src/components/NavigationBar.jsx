import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <nav>
        <ul>
            <li><NavLink to='/' exact="true">Home</NavLink></li>
            <li><NavLink to='/about' exact="true">About</NavLink></li>
            <li><NavLink to='/contact'  exact="true">Contact</NavLink></li>
            <li><NavLink to='/blog' exact="true">Blog</NavLink></li>
        </ul>
    </nav>
  )
}
