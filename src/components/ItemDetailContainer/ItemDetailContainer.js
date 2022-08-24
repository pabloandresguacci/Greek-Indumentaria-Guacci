
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {

  
  const paramId = useParams().id;

 
  const [producto, setProducto] = useState([]);

  useEffect(() => {

   
    const db = getFirestore();

   
    const itemsCollection = query(
      collection(db, "Items"),
      where(documentId(), "==", paramId)
    );

    
    getDocs(itemsCollection).then((snapshot) => {
      const itemSelected = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducto(itemSelected[0]);
    });
  }, [paramId]);

  return (
    <>
      <ItemDetail producto={producto}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;