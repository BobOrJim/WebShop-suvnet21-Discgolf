import { Route, Routes } from "react-router-dom";
//import Layout from "./Layout";
import Header from "./components/Header";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailedProductPage from "./pages/DetailedProductPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/system";
//import themeLight from "./styles/styles";
import { defaultTheme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='checkoutpage' element={<CheckoutPage />} />
          <Route path='detailedproductpage' element={<DetailedProductPage />}>
            <Route path=':productId' element={<DetailedProductPage />} />
          </Route>
          <Route path='adminpage' element={<AdminPage />} />
        </Route>
        <Route path='/' element={<Header />}>
          <Route path='editpage' element={<EditPage />}>
            <Route path=':productId' element={<EditPage />} />
          </Route>
        </Route>
        <Route path='*' element={<div>404 page does not exist</div>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
