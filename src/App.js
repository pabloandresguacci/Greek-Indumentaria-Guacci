import react from 'react'
import './App.css';
import Header from './componentes/Header/Header';
import remerahombre1 from "./imagenes/Remerahombre1.png";
import Mallashombre1 from './imagenes/Mallashombre1.png';
import mallahombre2 from './imagenes/mallashombre2.png';
import Item from './componentes/Productos/Item';
let styles = {
  
  height: '200px',
  backgroundColor: 'black', 
  color:'white',
  padding:'20px'
};

const items=[
  {
    nombre:'Remera',
    precio:'2500',
    imagen:remerahombre1,
    desc:'prenda',
  },

  {
    nombre:'Malla1',
    precio:'2500',
    imagen:Mallashombre1,
  },
  {
    nombre:'Malla2',
    precio:'2500',
    imagen:mallahombre2,
  }
]


function App() {
  return (<div style={styles}>
    <Header/>
    <section className='sectionapp'>
    {
      items.map((item, index)=>(
        <Item id={index}imagen={item.imagen} nombre={item.nombre} precio={item.precio} />
      ))
    }
    </section>
    </div>
    )
}

export default App;