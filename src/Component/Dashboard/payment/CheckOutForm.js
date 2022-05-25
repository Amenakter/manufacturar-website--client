import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';


const CheckOutForm = () => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || ' ')


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-xs btn-primary' disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </div>
    );
};

export default CheckOutForm;