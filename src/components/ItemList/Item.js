import React from "react";
import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({ info }) => {

    return (
        <div className=" carta">
            <div>{info.title}</div>
            <img className="t" src={info.imageId} alt= "imagenProducto"></img>
            <div>{info.precio}</div>
            <div>disponible {info.stock}</div>
            <Link to={`/item/${info.id}`}>
            <button>Detalle</button>
            </Link>
        </div>
    )

}

export default Item;

