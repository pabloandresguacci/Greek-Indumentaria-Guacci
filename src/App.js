
import React from 'react'
import './App.css';
import Header from './componentes/Header/Header';
import ItemCounter from "./componentes/ItemCounter/ItemCounter";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

let styles = {
  
  height: '200px',
  backgroundColor: 'black', 
  color:'white',
  padding:'20px'
};



function App() {
  return (<div style={styles}>
    <Header/>
    
    <ItemListContainer><ItemCounter /></ItemListContainer>
    </div>
    )
}

export default App;