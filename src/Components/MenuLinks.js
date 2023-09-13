import React from 'react'
import { Link } from 'react-router-dom'

const MenuLinks = () => {
  return (
    <nav className='w-80 bg-green-500 w-[20%]'>
      <ul className=''>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/">Notifications</Link>
        </li>
        <li>
          <Link to="/">Messages</Link>
        </li>
        <li>
          <Link to="/">Notifications</Link>
        </li>
        <li>
          <Link to="/">Lists</Link>
        </li>
        <li>
          <Link to="/">Communities</Link>
        </li>
        <li>
          <Link to="/">Verified</Link>
        </li>
        <li>
          <Link to="/">More</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuLinks