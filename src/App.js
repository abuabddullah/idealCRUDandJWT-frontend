import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './pages/sharedPages/NavigationBar/NavigationBar';
import NotFound from './pages/sharedPages/NotFound/NotFound'
import Home from './pages/HomePage/Home/Home';
import UpProducts from './pages/UpProducts/UpProducts';
import Products from './pages/Products/Products';
import Footer from './pages/sharedPages/Footer/Footer'
import Login from './pages/Login-SignUP-RequireAuth/Login/Login'
import MyOrders from './pages/MyOrders/MyOrders';
import RequireAuth from './pages/Login-SignUP-RequireAuth/RequireAuth/RequireAuth';
import UpdateOrders from './pages/MyOrders/UpdateOrders';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/upProducts" element={
        <RequireAuth>
        <UpProducts />
        </RequireAuth>} />

        <Route path="login" element={<Login />} />

        <Route path="orders" element={
        <RequireAuth>
        <MyOrders />
        </RequireAuth>} />

        <Route path="/updateorders/:_id" element={
        <RequireAuth>
        <UpdateOrders />
        </RequireAuth>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
