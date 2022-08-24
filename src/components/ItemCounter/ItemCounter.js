import React, { useState } from "react";
import "./ItemCounter.css";

export const ItemCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementarCounter = () => {
    if(counter < 10)
    setCounter((prevState) => prevState + 1);
  };

  const restarCounter = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <section className="contador">
      {counter}
      <div>
        <div className="botones1">
          <button onClick={incrementarCounter} className="botones"> Agregar</button>
          <button onClick={restarCounter} className="botones"> Quitar</button>
          <button onClick={() => props.changeBoolean(counter)} className="botones">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemCounter;
