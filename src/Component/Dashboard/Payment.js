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
    const url = `http://localhost:5000/order/${id}`
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
        <div className=''>
            <div class="card w-96 bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h2 class="card-title">order summary</h2>
                    <h2 class="card-title">{orders.name}</h2>
                    <p> Product Name: <span>{orders.productname}</span></p>
                    <p>price: <span> {orders.price} (per unit piece)</span></p>
                    <p>Order Quentity: <span>{orders.userQuentity}</span></p>
                    <p>Total Price: <span>{orders.userQuentity * orders.price}</span></p>
                    <p>If Everything is ok please Confirm order.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                    </Elements>


                </div>
            </div>
        </div>
    );
};

export default Payment;