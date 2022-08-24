import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li className="mover">
          <NavLink className="decoracion" to='/'>Productos</NavLink>
        </li>
        
          
        <li className="mover">
        <NavLink className="decoracion" to='/categoryId/Mujer'>Mujeres</NavLink>
        </li>
        <li className="mover">
        <NavLink  className="decoracion" to='/categoryId/Hombres'>Hombres</NavLink>
        </li >
        <li className="mover">
          <NavLink className="decoracion" to='/categoryId/Niños'>Niños</NavLink>
        </li>
        <CartWidget/>
      </ul>
    </div>
  )
}

export default Nav