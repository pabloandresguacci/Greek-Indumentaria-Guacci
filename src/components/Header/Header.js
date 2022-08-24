import React from 'react'

import Nav from '../Navbar/Nav'
import './Header.css'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
  return (
    <section className='header'>
        
        <h1 className='texto'>GREEK INDUMENTARIA</h1>
        <Nav></Nav>
        
    </section>
  )
}

export default Header