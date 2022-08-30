import { useState } from "react";
import "./css/app.css";
import {Router, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Frissbee-discogolf</h1>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<adminPage />}/>
      <Route path="/" element={<checkoutPage />}/>
      <Route path="/" element={<detailsProductPage />}/>
      <Route path="/" element={<productPage />}/>
      
    </Routes>
    </div>
  );
}

export default App;
