import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {gFetch} from '../../fetch/getFetch'
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  let pruebaCat = useParams().name;
  let category = ''

  if(pruebaCat === "Hombres"){
    category = "Hombres"
  } else {
    category = "Mujeres"
  }

  useEffect(() => {
    setTimeout(() => {
          gFetch
          .then(resp => setProductos(resp))
          .catch( err => console.log(err))
      }, 2000);
}, [])

  return (
    <>
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;