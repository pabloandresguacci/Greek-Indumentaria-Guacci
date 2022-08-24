import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listaCarrito, setListaCarrito] = useState([]);

  const addItem = (product, counter) => {
    const productFilter = listaCarrito.findIndex(
      (productFind) => product.id === productFind.id
    );
    if (productFilter !== -1) {
      listaCarrito[productFilter].quantity = listaCarrito[productFilter].quantity + counter;
    } else {
      listaCarrito.push({
        id: product.id,
        nombre: product.title,
        descripcion: product.Descripcion,
        categoria: product.categoryId,
        image: product.imageId,
        quantity: counter,
        precio: product.precio
      });
    }
    setListaCarrito([...listaCarrito]);
    console.log(listaCarrito);
  };
  
  const quitarProduct = (product ) => { 
    
    const actualizado = listaCarrito.filter ( (productFiltered) => product.id !== productFiltered.id);
    setListaCarrito([...actualizado])
  }

  const deleteCart = () => {
    setListaCarrito ([])
  };

  return (
    <CartContext.Provider value={{ addItem, listaCarrito, quitarProduct, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

