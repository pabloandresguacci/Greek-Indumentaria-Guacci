import React, {useContext, useState} from "react";
import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = (props) => {

  const [isBought, setIsBought] = useState(true);
  const [itemsComprados, setItemsComprados] = useState(0);

  const { addItem } = useContext(CartContext);

  const changeBoolean = (counter) => {
    console.log(counter);
    setIsBought(false);
    changeItemsComprados(counter);
    addItem(props.producto, counter);
  };

  const changeItemsComprados = (counter) => {
    setItemsComprados(counter);
  };

  const carrito = (
    <Link to="/carrito">
      <button className="botones">Ir al Carrito</button>
    </Link>
  );

  return (
    <div className="detalle">
      <div className="detalle1">
      <div className="titulo"> {props.producto.title}</div>
      <img src={props.producto.imageId} alt= "imagenProducto"></img>
      <div>precio: {props.producto.precio}</div>
      <div>stock: {props.producto.stock}</div>
      <div>Descripcion: {props.producto.Descripcion}</div>
      <div>categoria: {props.producto.categoryId}</div>
      </div>
      <div className="detalle2">
      <div className="items">Items agregados: {itemsComprados}</div>
      
      {isBought ? (
        <ItemCounter changeBoolean={changeBoolean} ></ItemCounter>
      ) : (
        carrito
      )}
      </div>
    </div>
  );
};

export default ItemDetail;