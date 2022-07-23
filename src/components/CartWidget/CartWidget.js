import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div >
      <Link to="/carrito">
        <HiOutlineShoppingCart className='cart'></HiOutlineShoppingCart>
      </Link>
    </div>
  );
};

export default CartWidget;
