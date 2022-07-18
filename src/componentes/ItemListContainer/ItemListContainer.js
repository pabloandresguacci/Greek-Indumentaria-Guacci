import React from "react";

import remerahombre1 from "../../imagenes/Remerahombre1.png";
import Mallashombre1 from '../../imagenes/Mallashombre1.png';
import mallahombre2 from '../../imagenes/mallashombre2.png';
import Item from '../Productos/Item';
const items = [
  {
    nombre: 'Remera',
    precio: '2500',
    imagen: remerahombre1,
    desc: 'prenda',
  },

  {
    nombre: 'Malla1',
    precio: '2500',
    imagen: Mallashombre1,
  },
  {
    nombre: 'Malla2',
    precio: '2500',
    imagen: mallahombre2,
  }
]

const ItemListContainer = () => {

  

  return (
    
        <section className='sectionapp'>
    {
      items.map((items, index)=>(
        <Item id={index}
        imagen={items.imagen} 
        nombre={items.nombre} 
        precio={items.precio} />
      ))
    }
    </section>
      
  
    
  );
};

export default ItemListContainer;