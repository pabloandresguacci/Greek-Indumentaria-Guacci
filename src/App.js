import {useState, useEffect} from 'react'
import './App.css';
import Header from './componentes/Header/Header'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCounter from './componentes/Itemcounter/Itemcounter'
let styles = {
  
  height: '200px',
  backgroundColor: 'black', 
  color:'white',
  padding:'20px'
};

function App() {
  const [numero, setNumero]= useState(0);
  useEffect(()=>{
    console.log('componente sumado');
  }, []);
  console.log('componente por sumar');
  const sumar = () => {
    console.log('suma');
    setNumero(numero+1);
  };
  const restar = () => {
    console.log('resta');
    setNumero(numero-1);
  };
  return (<div style={styles}>
    <Header/>
    <section className='sectionBody'>
    <div className='centrarDiv'>
    <p>remera</p>
    {
      numero < 5 ? (<ItemCounter numero={numero}/>):(<h5>sin stock</h5>)
    };
    
    <div>
    <button onClick={sumar}> agregar</button>
    <button onClick={restar}> eliminar</button>
    </div>
    </div>
    </section>
  </div>
  )
  ;
}

export default App;