import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const a = JSON.parse(localStorage.getItem('auth'))
  const [auth, setAuth] = useState(a);

  useEffect(() => {
    localStorage.setItem('auth', auth)
  }, [auth])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<div>Main</div>} />
        <Route
          path="/login"
          element={
            <PublicRoute auth={auth}>
              <LoginPage setAuth={setAuth} />
            </PublicRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute auth={auth}>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-product"
          element={
            <PrivateRoute auth={auth}>
              <CreateProduct />
            </PrivateRoute>
          }
        />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
