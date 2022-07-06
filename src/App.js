
import './App.css';
import Header from './componentes/Header/Header'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

let styles = {
  
  height: '200px',
  backgroundColor: 'black', 
  color:'white',
  padding:'20px'
};

function App() {
  return <div style={styles}>
    <Header/>
    <ItemListContainer saludos={'¡Bienvenidos a GREEK INDUMENTARIA!'} />
  </div>;
}

export default App;