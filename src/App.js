import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import CartTable from "./components/CartTable/CartTable";

let styles = {
  height: "120px",
  backgroundColor: "#afeeee",
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes style={styles}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoryId/:name" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartTable/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
