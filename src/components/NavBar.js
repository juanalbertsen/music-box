import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cartwidget from './CartWidget.js'

const NavBar = () => {
  return (
<div data-theme="autumn" class="navbar bg-base-100">
  <div className="flex-1">
  <Link to={'/'}>
    <img src="./img/musicbox-logo-12.png" className="w-20 m-3"></img>  
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 m-2">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/category/guitarras'}>Guitarras</NavLink></li>
      <li><NavLink to={'/category/teclados'}>Teclados</NavLink></li>
      <li><NavLink to={'/category/percusion'}>Percusión</NavLink></li>
      <li>
        <Cartwidget></Cartwidget>
      </li>
    </ul>
  </div>
</div>
  )
}

export default NavBar