import React from 'react';
import './Nav.css'
const Nav = () => {
  return (
    <div className = 'navBar'>
      <ul className = 'quitarPunto'>
        <li className ='espaciado'>
          <a href='./'>HOMBRES</a>
        </li>
        <li className ='espaciado'>
          <a href='./'>MUJERES</a>
        </li>
        <li className ='espaciado'>
          <a href='./'>NIÑOS</a>
        </li>
      </ul>
    </div>
  )
};

export default Nav