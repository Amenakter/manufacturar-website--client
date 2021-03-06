import React from 'react';
import { useQuery } from 'react-query';
import DeleteOrder from '../hook/DeleteOrder';
import Loading from '../Shered/Loading';

import OrderRow from './OrderRow';

const ManageAllOrder = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('users', () => fetch('https://damp-meadow-76424.herokuapp.com/allOrders').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
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
                            allOrders?.map((orders, index) =>
                                <OrderRow
                                    key={orders._id}
                                    orders={orders}
                                    index={index}
                                    refetch={refetch}
                                ></OrderRow>
                            )
                        }

                    </tbody>
                </table>
            </div>

            <div className=' grid grid-cols-1 gap-4 md:hidden mt-20'>
                {
                    allOrders?.map(order => <DeleteOrder
                        order={order}
                        key={order._id}
                        refetch={refetch}
                    ></DeleteOrder>
                    )
                }

            </div>
        </div>
    );
};

export default ManageAllOrder; 