import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { gFetch } from '../../fetch/getFetch'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    
 
    useEffect(() => {
      gFetch
      .then(resp => setProducts(resp))
      .catch( err => console.log(err))
    }, [])
    
  return (
    <div>
      <ItemList productos={products} />
    </div>

  
  )
}

export default ItemListContainer;
