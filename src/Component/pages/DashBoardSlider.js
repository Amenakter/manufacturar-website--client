import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.intit';
import useAdmin from '../hook/useAdmin';

const DashBoardSlider = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile bg-neutral mt-8">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content w-full flex flex-col justify-center">
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {(user && !admin) && <li> <NavLink to='/dashboard/myOrder'>My Orders</NavLink></li>}
                    {(user && !admin) && <li><NavLink to='/dashboard/addReview'>Add Review</NavLink></li>}
                    <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
                    {(!user || admin) && <li><NavLink to='/dashboard/makeAdmin'> Admin Pannel</NavLink></li>}
                    {(!user || admin) && <li><NavLink to='/dashboard/manageAllorders'>Manage All Orders</NavLink></li>}
                    {(!user || admin) && <li> <NavLink to='/dashboard/addProduct'>Add Product</NavLink></li>}
                    {(!user || admin) && <li><NavLink to='/dashboard/manageProducts'>Manage Products</NavLink></li>}
                </ul>

            </div>
        </div >
    );
};

export default DashBoardSlider;