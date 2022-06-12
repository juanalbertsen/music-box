import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cartwidget from './CartWidget.js'
import {IoMenu} from 'react-icons/io5'

const NavBar = () => {

  const [visible, setVisible] = useState(false)

  return (
<div data-theme="autumn" class=" md:navbar bg-base-100 flex flex-col content-center md:flex-row">
  <div className="flex justify-between content-center md:flex-1">
  <Link to={'/'}>
    <img src="./img/musicbox-logo-12.png" className="w-20 m-3"></img>  
    </Link>
    <Link to={'/cart'} className="mt-10 md:hidden"><Cartwidget></Cartwidget></Link>
    <a onClick={()=> setVisible(!visible)} className='text-xl m-4 mt-10 md:hidden hover:cursor-pointer'><IoMenu className='border-solid'/></a>
  </div>
  <div className="flex-none">
    <ul className={ visible ? "flex menu menu-vertical" :" hidden menu menu-vertical md:menu-horizontal p-0 m-2"}>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/category/guitarras'}>Guitarras</NavLink></li>
      <li><NavLink to={'/category/teclados'}>Teclados</NavLink></li>
      <li><NavLink to={'/category/percusion'}>Percusión</NavLink></li>
      <li><NavLink to={'/cart'}>Carrito</NavLink></li>
      <li className="hidden md:block">
      <Link to={'/cart'}><Cartwidget></Cartwidget></Link>
      </li>
    </ul>
  </div>
</div>
  )
}

export default NavBar