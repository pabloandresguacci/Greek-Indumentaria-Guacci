import React from "react";
import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({ info }) => {

    return (
        <div className="bdy, formato">
            <div>{info.name}</div>
            <img className="t" src={info.imagen} alt= "imagenProducto"></img>
            <div>{info.precio}</div>

            <Link to={`/item/${info.id}`}>
            <button>Detalle</button>
            </Link>
        </div>
    )

}

export default Item;

