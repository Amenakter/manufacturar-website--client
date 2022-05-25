import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [])
    return (
        <div>
            <h2>total orders:{allOrders.length}</h2>
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
                            allOrders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.productname}</td>
                                <td>{order.userQuentity}</td>
                                <td>{order.userQuentity * order.price}</td>
                                <td>{(order.price && !order.paid) && <Link to={`/`} > <button className='btn btn-warning btn-xs' >Unpaid</button></Link>} </td>
                                <td>{(order.price && !order.paid) && <button className='btn btn-error btn-xs' >cancle</button>} </td>
                                <td>{(order.price && order.paid) && <span className='text-success' >Paid</span>} </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder; 