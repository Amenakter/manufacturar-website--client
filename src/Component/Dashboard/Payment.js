import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import Loading from '../Shered/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './payment/CheckOutForm';



const stripePromise = loadStripe('pk_test_51L1r9KHitP50iTcJUuCoZXer8MLXs2AIglemaYNcwGQbhzLsSAHZJtgvcUaUMNUS1o1yKrBLjpZo4Wp3XtYs19Mi00DI6N4r76');
const Payment = () => {
    const { id } = useParams()
    const url = `https://damp-meadow-76424.herokuapp.com/order/${id}`
    const { data: orders, isLoading } = useQuery('order', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl mb-8">
                <div class="card-body ">
                    <h2 class="card-title text-primary font-bold ml-16">Order Summary</h2>
                    <div className='divider'></div>
                    <h2 class="card-title text-secondary">{orders.name}</h2>
                    <p className='text-primary font-bold'> Product Name: <span className='text-secondary font-bold'>{orders.productname}</span></p>
                    <p className='text-primary font-bold'>price: <span className='text-secondary font-bold'> {orders.price} (per unit piece)</span></p>
                    <p className='text-primary font-bold'>Order Quentity: <span className='text-secondary font-bold'>{orders.userQuentity}</span></p>
                    <p className='text-primary font-bold'>Total Price: <span className='text-secondary font-bold'>{orders.userQuentity * orders.price}</span></p>
                    <p className='text-primary font-bold'>If Everything is ok please Confirm order.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            orders={orders}
                        >

                        </CheckOutForm>
                    </Elements>


                </div>
            </div>
        </div>
    );
};

export default Payment;