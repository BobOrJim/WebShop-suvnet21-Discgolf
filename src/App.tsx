import { useState } from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailedProductPage from "./pages/DetailedProductPage";
import ProductsPage from "./pages/ProductsPage";
import { Container } from "@mui/material";
import {AppBar} from "@mui/material";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frissbee-discogolf</h1>
    <AppBar> 
      <Container>

        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/AdminPage" element={<AdminPage />}/>
          <Route path="/CheckoutPage" element={<CheckoutPage />}/>
          <Route path="/DetailedProductPage" element={<DetailedProductPage />}/>
          <Route path="/ProductsPage" element={<ProductsPage />}/>
      
        </Routes>
      </Container>
    </AppBar>
    </div>
  )
}
export default App;
