import React from 'react';
import { Link } from 'react-router-dom';

const DeleteOrder = ({ order }) => {
    return (

        <div className=' grid grid-cols-1 gap-4 md:hidden mt-20'>
            <div className='flex items-center justify-center space-x-2 text-sm'>
                <div class="card w-96 bg-white shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-primary ">Product : {order.productname}</h2>
                        <p className='font-bold'>Email : {order.email}</p>
                        <p>Order quentity : {order.userQuentity}</p>
                        <p> Total price: {order.userQuentity * order.price}</p>
                        <div class="card-actions justify-end">
                            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} > <button className='btn btn-warning btn-xs' >Pay Now</button></Link>}
                            {(order.price && !order.paid) && <button className='btn btn-error btn-xs' >cancle</button>}
                            {(order.price && order.paid) && <span className='text-success' >Paid</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteOrder;