import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget'
const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li className='barra'>
          <NavLink to='/' className='letras'>Inicio</NavLink>
        </li>
        <li className='barra'>
          <NavLink to='/Contacto' className='letras'>Contacto</NavLink>
        </li>
        <li className='barra'>
        <NavLink to='/category/Hombres' className='letras'>Hombres</NavLink>
        </li>
        <li className='barra'>
        <NavLink to='/category/Mujeres' className='letras'>Mujeres</NavLink>
        </li>
      <CartWidget/>
      </ul>
    </div>
  )
}

export default Nav