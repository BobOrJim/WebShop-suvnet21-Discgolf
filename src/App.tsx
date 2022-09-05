import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailedProductPage from "./pages/DetailedProductPage";
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detailedproductpage" element={<DetailedProductPage />}>
          <Route path=":productId" element={<DetailedProductPage />} />
        </Route>
        <Route path="adminpage" element={<AdminPage />} />
        <Route path="checkoutpage" element={<CheckoutPage />} />
      </Route>
      <Route path="editpage" element={<EditPage />}>
        <Route path=":discId" element={<EditPage />} />
      </Route>
      <Route path="*" element={<div>404 page does not exist</div>}></Route>
    </Routes>

    /*
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detailedproductpage" element={<DetailedProductPage />}>
          <Route path=":discId" element={<DetailedProductPage />} />
        </Route>
        <Route path="adminpage" element={<AdminPage />} />
        <Route path="checkoutpage" element={<CheckoutPage />} />
      </Route>
      <Route path="editpage" element={<EditPage />}>
        <Route path=":discId" element={<EditPage />} />
      </Route>
      <Route path="*" element={<div>404 page does not exist</div>}></Route>
    </Routes>*/
  );
}

export default App;
