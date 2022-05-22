import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './Component/Dashboard/AddAdmin';
import AddInventory from './Component/Dashboard/AddInventory';
import AddReview from './Component/Dashboard/AddReview';
import Dashboard from './Component/Dashboard/Dashboard';
import ManageAllOrder from './Component/Dashboard/ManageAllOrder';
import ManageProducts from './Component/Dashboard/ManageProducts';
import MyOrders from './Component/Dashboard/MyOrders';
import MyProfile from './Component/Dashboard/MyProfile';
import Home from './Component/pages/Home/Home';
import Navber from './Component/Shered/Navber';


function App() {
  return (
    <div>
      <Navber>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='myOrder' element={<MyOrders />}></Route>
            <Route path='profile' element={<MyProfile />}></Route>
            <Route path='addReview' element={<AddReview />}></Route>
            <Route path='manageAllorders' element={<ManageAllOrder />}></Route>
            <Route path='addProduct' element={<AddInventory />}></Route>
            <Route path='makeAdmin' element={<AddAdmin />}></Route>
            <Route path='manageProducts' element={<ManageProducts />}></Route>
          </Route>
        </Routes>

      </Navber>
    </div>


  );
}

export default App;
