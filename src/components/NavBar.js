import React from 'react'
import Cartwidget from './CartWidget.js'

const NavBar = () => {
  return (
<div data-theme="autumn" class="navbar bg-base-100">
  <div className="flex-1">
    <img src="./img/musicbox-logo-12.png" className="w-20 m-3"></img>  
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 m-2">
      <li><a>Home</a></li>
      <li tabindex="0">
        <a>
          Productos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Nuevos</a></li>
          <li><a>Usados</a></li>
        </ul>
      </li>
      <li><a>Contacto</a></li>
      <li>
        <Cartwidget></Cartwidget>
      </li>
    </ul>
  </div>
</div>
  )
}

export default NavBar