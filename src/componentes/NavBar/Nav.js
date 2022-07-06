import React from 'react';
import './Nav.css'
import CartWidget from '../CartWidget/CartWidget';
const Nav = () => {
  return (
    <><section className='SectionNav'>
      <div className='navBar'>
        <ul className='quitarPunto'>
          <li className='espaciado'>
            <a href='./'>HOMBRES</a>
          </li>
          <li className='espaciado'>
            <a href='./'>MUJERES</a>
          </li>
          <li className='espaciado'>
            <a href='./'>NIÑOS</a>
            
          </li>
        </ul>
      </div>
      <CartWidget></CartWidget>
    </section></>
  )
};

export default Nav