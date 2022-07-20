import React, {useState} from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import ItemCounter from '../ItemCounter/ItemCounter'
import './Item.css'

const Item = ({ info }) => {

    const [iShow, setIShow] = useState(false)

    const cambiar = () => {
        setIShow( !iShow ) 
    } 


    return (
        <div className='card'>
        
            <div className='colorn'>{info.name}</div>
            <img className='tamañoimg' src={info.imagen}></img>
            <div className='colorn'>{info.precio}</div>
            <button onClick ={ cambiar }>Detalle</button>
            { iShow && <ItemDetail detalles={info}></ItemDetail>}
            <ItemCounter className='colorn' />
        </div>
        
    )

}

export default Item;

