import React, {useState} from "react";
import "./Itemcounter.css";

export const ItemCounter = () => {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    console.log("suma");
    setNumero(numero + 1);
  };

  const restar = () => {
    if (numero > 0) {
      console.log("resta");
      setNumero(numero - 1);
    }
  };

  return (
    <section >
     
      <div className='centrado'>
      <p>{numero < 6 ? <h3>{numero}</h3> : <h3>NO HAY STOCK</h3>}</p>

        <div className='counterDiv'>
          <button className='botones' onClick={sumar}> agregar</button>
          <button className='botones2' onClick={restar}> eliminar</button>
        </div>
      </div>
    </section>
  );
};

export default ItemCounter;