import React, { useState } from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ orders, index, refetch }) => {
    const [shipped, setShipped] = useState(false)
    const [DeleteOrder, setDeleteOrder] = useState([])

    const { _id, email, productname, userQuentity, price, paid } = orders

    const toggle = () => {
        shipped ? setShipped(false) : setShipped(true)
    }
    const handleDeleteOrder = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaingOrder = DeleteOrder.filter(delorders => delorders._id !== id)
                    setDeleteOrder(remaingOrder);
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
                <td>
                    <div class="justify-end">
                        {(price && paid) && <div className='flex justify-end'>
                            {!shipped ? <p className='text-success font-bold' >panding</p> : <p className='text-success font-bold' >shipped</p>}
                            <div>
                                <button onClick={toggle} className='btn btn-xs btn-info ml-4' >uptade Status</button>
                            </div>
                        </div>}
                        {(price && !paid) && <button className='btn btn-warning btn-xs' >Unpaid</button>}
                        {(price && !paid) &&

                            <button>
                                <label for="my-modal-3" className='btn btn-error btn-xs ml-4'>cancel</label>
                            </button>

                        }
                    </div>
                </td>
            </tr >
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button class="btn btn-warning" onClick={() => handleDeleteOrder(_id)}  >YES</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default OrderRow;