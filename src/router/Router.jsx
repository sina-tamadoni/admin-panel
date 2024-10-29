import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import NotFound from "../pages/404";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AuthProvider from "../providers/AuthProvider";
import { Toaster } from "react-hot-toast";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <ProductsPage />
            </AuthProvider>
          }
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default Router;
