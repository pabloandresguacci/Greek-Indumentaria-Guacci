import React from "react";
import './ItemDetail.css'
const ItemDetail = (props) => {
  return (
    <div className='colorn'>
      <div>Title: {props.detalles.name}</div>
      <img src={props.detalles.imagen}></img>
      <div>Price: {props.detalles.precio}</div>
      <div>Description: {props.detalles.description}</div>
	  <div>Category: {props.detalles.categoria}</div>
    </div>
  );
};

export default ItemDetail;
