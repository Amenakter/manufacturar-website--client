import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequiredAuth from './Component/Authentication/RequiredAuth';
import AddAdmin from './Component/Dashboard/AddAdmin';
import AddInventory from './Component/Dashboard/AddInventory';
import AddReview from './Component/Dashboard/AddReview';
import Dashboard from './Component/Dashboard/Dashboard';
import ManageAllOrder from './Component/Dashboard/ManageAllOrder';
import ManageProducts from './Component/Dashboard/ManageProducts';
import MyOrders from './Component/Dashboard/MyOrders';
import MyProfile from './Component/Dashboard/MyProfile';
import Home from './Component/pages/Home/Home';
import Login from './Component/pages/Login';
import Purchase from './Component/pages/Purchase';
import Register from './Component/pages/Register';
import Review from './Component/pages/Review';
import Navber from './Component/Shered/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Component/Dashboard/Payment';
import NotFound from './Component/Shered/NotFound';
import RequireAdmin from './Component/Authentication/RequireAdmin';
import Portfolio from './Component/pages/Home/Portfolio';
import Blog from './Component/pages/Home/Blog';


function App() {
  return (
    <div>
      <Navber>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/purchase/:id' element={
            <RequiredAuth>
              <Purchase></Purchase>
            </RequiredAuth>
          }></Route>

          <Route path='/dashboard' element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
          }>
            <Route path='myOrder' element={<MyOrders />}></Route>
            <Route path='profile' element={
              <RequiredAuth>
                <MyProfile />
              </RequiredAuth>
            }></Route>
            <Route path='addReview' element={<AddReview />}></Route>
            <Route path='manageAllorders' element={
              <RequireAdmin>
                <ManageAllOrder />
              </RequireAdmin>
            }></Route>
            <Route path='addProduct' element={<AddInventory />}></Route>
            <Route path='makeAdmin' element={
              <RequireAdmin>
                <AddAdmin />
              </RequireAdmin>
            }></Route>
            <Route path='manageProducts' element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }></Route>
            <Route path='payment/:id' element={<Payment />}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </Navber>
      <ToastContainer></ToastContainer>
    </div>


  );
}

export default App;
