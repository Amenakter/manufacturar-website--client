import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.intit';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email
        fetch(`http://localhost:5000/order?email=${email}`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    navigate('/')
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                }
                return res.json();

            })
            .then(data => {
                setOrders(data);
            })
    }, [navigate, user])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-8 text-success'>Your orders Details</h2>
            <div class="overflow-auto hidden md:block ">
                <table class="table w-96 mt-8 ml-8 ">
                    {/* <!-- head --> */}
                    <thead >
                        <tr >
                            <th></th>
                            <th>User Email</th>
                            <th>Product</th>
                            <th >quentity</th>
                            <th>Total Amount</th>
                            <th>Payment</th>
                            <th>Dismiss</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.productname}</td>
                                <td>{order.userQuentity}</td>
                                <td>{order.userQuentity * order.price}</td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} > <button className='btn btn-warning btn-xs' >Pay Now</button></Link>} </td>
                                <td>{(order.price && !order.paid) && <button className='btn btn-error btn-xs' >cancle</button>} </td>
                                <td>{(order.price && order.paid) && <span className='text-success' >Paid</span>} </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className=' grid grid-cols-1 gap-4 md:hidden mt-20'>


                {
                    orders.map(order =>
                        <div className='flex items-center justify-center space-x-2 text-sm'>
                            <div class="card w-96 bg-white shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title text-primary ">Product : {order.productname}</h2>
                                    <p className='font-bold'>Email : {order.email}</p>
                                    <p>Order quentity : {order.userQuentity}</p>
                                    <p> Total price: {order.userQuentity * order.price}</p>
                                    <div class="card-actions justify-end">
                                        {(order.price && !order.paid) && <Link to={`/payment/${order._id}`} > <button className='btn btn-warning btn-xs' >Pay Now</button></Link>}
                                        {(order.price && !order.paid) && <button className='btn btn-error btn-xs' >cancle</button>}
                                        {(order.price && order.paid) && <span className='text-success' >Paid</span>}
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export default MyOrders;