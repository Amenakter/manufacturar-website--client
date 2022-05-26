import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.intit';
import { toast } from "react-toastify";

const Purchase = () => {
    const { id } = useParams()

    const [purchasedata, setPurchasedata] = useState({})
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault();
        const userOrder = {
            name: event?.target?.name?.value,
            email: event?.target?.email?.value,
            address: event?.target?.address?.value,
            phone: event?.target?.phone?.value,
            productname: event?.target?.productname?.value,
            availableQuentity: event?.target?.availablequentity?.value,
            minimumQuentity: event?.target?.miniquentity?.value,
            userQuentity: event?.target?.userquentity?.value,
            price: event?.target?.price?.value,
        }
        console.log(userOrder);
        const url = 'http://localhost:5000/order'
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
        toast.success('Order Completed')
        // const availableQuentity = event?.target?.availablequentity?.value
        // const minimumQuentity = event?.target?.miniquentity?.value
        // const userQuentity = event?.target?.userquentity?.value
        // console.log(minimumQuentity, availableQuentity, userQuentity);
        // if ((userQuentity > minimumQuentity) && (userQuentity < availableQuentity)) {
        //    
        //     toast.success("Order Successful")
        // }

        // else {
        //     toast.error("You cann't order less then minimum Quentity and upto available quentity")
        // }
        event.target.phone.value = "";
        event.target.address.value = '';
        event.target.userquentity.value = ''

    }
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchasedata(data);
            })
    }, [id])


    return (
        <div>
            <div class="hero h-screen bg-base-100 mt-16">
                <div class="card flex-shrink-0 shadow-2xl bg-neutral">
                    <div class="card-body">
                        <h2 className='text-2xl font-bold text-center'>Order NOW</h2>
                        <p className=' text-center'>PLEASE GIVE MORE INFORMATION IN THAT EMPTY FIELD</p>
                        <form onSubmit={handleSubmit} className="">
                            <div className='flex flex-row items-center justify-center '>
                                <div className='p-8'>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">Name</span>
                                        </label>
                                        <input

                                            type="text"
                                            value={user?.displayName}
                                            class="input input-bordered w-80 font-bold"
                                            name='name'

                                        />

                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text font-bold">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={user?.email}
                                            class="input input-bordered font-bold"
                                            name='email'
                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">Address</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="address"
                                            class="input input-bordered font-bold"
                                            name='address'

                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">phone number</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="phome number"
                                            class="input input-bordered font-bold"
                                            name='phone'

                                        />

                                    </div>
                                </div>
                                <div className='p-16'>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">ProductName</span>
                                        </label>
                                        <input type="text"
                                            disabled
                                            value={purchasedata.ProductName}
                                            class="input input-bordered w-80 font-bold"
                                            name='productname'

                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">Available Quentity</span>
                                        </label>
                                        <input type="text"
                                            value={purchasedata.avaliableQuentity}
                                            class="input input-bordered font-bold"
                                            name='availablequentity'

                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">minimun quentity</span>
                                        </label>
                                        <input type="number"
                                            value={purchasedata.minimumQuentity}
                                            placeholder='number'
                                            class="input input-bordered font-bold"
                                            name='miniquentity'

                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">Your Quentity</span>
                                        </label>
                                        <input type="number"
                                            class="input input-bordered font-bold"
                                            placeholder='quentity enter here'
                                            name='userquentity'
                                        />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text  font-bold">Price(per unit)</span>
                                        </label>
                                        <input type="text"
                                            disabled
                                            value={purchasedata.price}
                                            class="input input-bordered font-bold"
                                            name='price'

                                        />

                                    </div>


                                </div>
                            </div>
                            <div class="text-center">

                                <button class="btn btn-primary  w-96">Order Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;