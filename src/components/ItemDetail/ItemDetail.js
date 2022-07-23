import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";



const ItemDetail = (props) => {

  const [isBought, setIsBought] = useState(true);
  const [itemsComprados, setItemsComprados] = useState(0);

  const changeBoolean = (counter) => {
    console.log(counter);
    setIsBought(false);
    changeItemsComprados(counter);
  };

  const changeItemsComprados = (counter) => {
    setItemsComprados(counter);
  };

  const carrito = (
    <Link to="/carrito">
      <button>Ir al Carrito</button>
    </Link>
  );

  return (
    
    <div className='clase'>
      
      <div>Nombre: {props.product.name}</div>
      <img src={props.product.imagen} alt= "imagenProducto"></img>
      <div>Precio: {props.product.precio}</div>
      <div>Descripcion: {props.product.description}</div>
      <div>Categoria: {props.product.categoria}</div>
      <div>Items agregados: {itemsComprados}</div>

      {isBought ? (
        <ItemCounter changeBoolean={changeBoolean}></ItemCounter>
      ) : (
        carrito
      )}
    </div>
  );
};

export default ItemDetail;
