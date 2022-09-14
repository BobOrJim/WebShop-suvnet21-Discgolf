import { Outlet, Route, Routes } from "react-router-dom";
//import Layout from "./Layout";
import { ThemeProvider } from "@mui/system";
import Header from "./components/Header";
import CheckoutPage from "./pages/CheckoutPage";
import DetailedProductPage from "./pages/DetailedProductPage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
//import themeLight from "./styles/styles";
import AdminPage from "./pages/AdminPage";
import { defaultTheme } from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='product/:productId' element={<DetailedProductPage />} />
          <Route path='admin' element={<Outlet />}>
            <Route index element={<AdminPage />} />
            <Route path='edit/new' element={<EditPage />} />
            <Route path='edit/:productId' element={<EditPage />} />
          </Route>
        </Route>
        <Route path='*' element={<div>404 page does not exist</div>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
