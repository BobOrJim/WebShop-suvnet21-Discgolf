import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AdminPage from "./pages/adminPage";
import CheckoutPage from "./pages/checkoutPage";
import DetailedProductPage from "./pages/detailedProductPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":discId" element={<DetailedProductPage />} />
        <Route path="adminpage" element={<AdminPage />} />
        <Route path="checkoutpage" element={<CheckoutPage />} />
      </Route>
      <Route path="*" element={<div>404 page does not exist</div>}></Route>
    </Routes>
  );
}
export default App;
