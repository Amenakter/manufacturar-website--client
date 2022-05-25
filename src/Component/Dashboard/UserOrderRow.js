import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserOrderRow = ({ order, index, refetch }) => {
    const [deleted, setDeleted] = useState([]);
    const { _id, email, productname, userQuentity, price, transactionId, paid } = order;

    const handleDeleteUserOrder = (id) => {

        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaingOrder = deleted.filter(delorders => delorders._id !== id)
                    setDeleted(remaingOrder);
                    refetch();
                    toast.success('Order Removed Successfully')

                }
            })

    }
    return (
        <>


            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{productname}</td>
                <td>{userQuentity}</td>
                <td>{userQuentity * price}</td>
                <td><div class="justify-end">
                    {(price && !paid) && <Link to={`/dashboard/payment/${_id}`} > <button className='btn btn-warning btn-xs' >Pay Now</button></Link>}
                    {(price && !paid) && <button >
                        <label for="my-modal-3" className='btn btn-error btn-xs ml-4'>cancel</label>
                    </button>}
                    {(price && paid) && <div>
                        <p className='text-success font-bold' >Paid</p>
                        <p className='text-info ' >{transactionId}</p>
                    </div>}
                </div></td>

            </tr>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-info text-center">Confirm ME!!!</h3>
                    <p class="py-4 text-success text-bold ">Are you sure, Do you want to <span className='text-red-500 text-bold'>Delete </span> this order?</p>
                    <div class="modal-action">
                        <button class="btn btn-xs btn-warning " onClick={() => handleDeleteUserOrder(_id)}  >YES</button>
                    </div>
                </div>
            </div>

        </>

    );
};

export default UserOrderRow;