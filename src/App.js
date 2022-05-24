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
import About from './Component/pages/About';
import BusinessSummary from './Component/pages/BusinessSummary';
import Home from './Component/pages/Home/Home';
import Inventory from './Component/pages/Inventory';
import Login from './Component/pages/Login';
import Purchase from './Component/pages/Purchase';
import Register from './Component/pages/Register';
import Review from './Component/pages/Review';
import Navber from './Component/Shered/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navber>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/inventory' element={
            <RequiredAuth>
              <Inventory></Inventory>
            </RequiredAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/summary' element={<BusinessSummary></BusinessSummary>}></Route>
          <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>

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
            <Route path='manageAllorders' element={<ManageAllOrder />}></Route>
            <Route path='addProduct' element={<AddInventory />}></Route>
            <Route path='makeAdmin' element={<AddAdmin />}></Route>
            <Route path='manageProducts' element={<ManageProducts />}></Route>
          </Route>

        </Routes>

      </Navber>
      <ToastContainer></ToastContainer>
    </div>


  );
}

export default App;
