import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import EmployeePage from "./pages/employeePage/EmployeePage";
import CategoriPage from "./pages/categoriPage/CategoriPage";
import FoodPage from "./pages/foodPage/FoodPage";
import OrderPage from "./pages/orderPage/OrderPage";
import UsersPage from "./pages/usersPage/UsersPage";



function App() {
  const {darkMode} = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login/>} />
            <Route index element={<RequireAuth> <Home/> </RequireAuth>} />
            <Route path="employee">
              <Route index element={<RequireAuth> <EmployeePage/> </RequireAuth>} />
              {/* <Route index element={<RequireAuth></RequireAuth>}/> */}
            </Route>
            <Route path="users">
              <Route index element={<RequireAuth> <UsersPage/> </RequireAuth>} />
              {/* <Route index element={<RequireAuth></RequireAuth>}/> */}
            </Route>
            <Route path="categori">
              <Route index element={<RequireAuth> <CategoriPage/> </RequireAuth>}/>
            </Route>
            <Route path="food">
              <Route index element={<RequireAuth> <FoodPage/></RequireAuth>}/>
              {/* <Route index element={<RequireAuth></RequireAuth>}/> */}
            </Route>
            <Route path="order">
              <Route index element={<RequireAuth> <OrderPage/></RequireAuth>}/>
              {/* <Route index element={<RequireAuth></RequireAuth>}/> */}
            </Route>
          </Route>
          {/* <Route path="*" index element={<Navigate to="login" replace />}/> */}
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
