import React from 'react';
import {HiOutlineShoppingCart}from 'react-icons/hi'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className= 'carrito'>
           <a href='./'> <HiOutlineShoppingCart></HiOutlineShoppingCart></a>
        </div>
    )
}

export default CartWidget