import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);

  const pruebaCat = useParams().name;


  useEffect(() => {
    const db = getFirestore();

    if (pruebaCat) {
      const itemsCollection = query(
        collection(db, "Items"),
        where("categoryId", "==", pruebaCat)
      );
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      const itemsCollection = query(collection(db, "Items"));
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [pruebaCat]);

  return (
    <>
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;