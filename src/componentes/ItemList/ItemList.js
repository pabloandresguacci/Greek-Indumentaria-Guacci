import React from "react";
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => {
  return (
    <div className='cartasacom'>
      {props.productos.map((producto) => {
        return <Item key={producto.id} info={producto}></Item>;
      })}
    </div>
  );
};

export default ItemList;
