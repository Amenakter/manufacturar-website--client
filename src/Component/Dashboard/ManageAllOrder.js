import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [shipped, setShipped] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [])

    // shipped button toggole
    const toggle = () => {
        shipped ? setShipped(false) : setShipped(true)
    }
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
                            <th>User Payment Status</th>


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
                                <td>
                                    <div class="justify-end">
                                        {(order.price && !order.paid) && <button className='btn btn-warning btn-xs' >Unpaid</button>}
                                        {(order.price && !order.paid) && <button className='btn btn-error btn-xs ml-4' >cancle</button>}
                                        {(order.price && order.paid) && <div className='flex justify-end'>
                                            {!shipped ? <p className='text-success font-bold' >panding</p> : <p className='text-success font-bold' >shipped</p>}
                                            <div>
                                                <button onClick={toggle} className='btn btn-xs btn-info ml-4' >uptade Status</button>
                                            </div>
                                        </div>}
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder; 