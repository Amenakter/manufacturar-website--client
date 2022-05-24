import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();
    const [uploadimage, setUploadImage] = useState('');
    const onSubmit = async (data) => {
        const addItem = {
            ProductName: data.name,
            price: data.price,
            avaliableQuentity: data.availableQuentity,
            minimumQuentity: data.minimumQuentity,
            description: data.description,
            image: uploadimage
        }
        console.log(addItem);
        const res = await axios.post('http://localhost:5000/addProducts', addItem)
        console.log(res.data);
        reset();
    };
    const handleUploadImage = event => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.set('image', image)
        axios.post('https://api.imgbb.com/1/upload?key=55fddf481801fadbe3a64d10474f1356', formData)
            .then(res => {
                setUploadImage(res?.data?.data?.display_url);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div class="hero h-screen bg-base-100">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                <div class="card-body">
                    <h2 className='text-2xl font-bold text-center'>Add product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  font-bold">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                class="input input-bordered"
                                {...register("name")}
                            />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  font-bold">price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="price"
                                class="input input-bordered"
                                {...register("price",)}
                            />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  font-bold"> available Quentity</span>
                            </label>
                            <input type="text"
                                placeholder="quentity"
                                class="input input-bordered"
                                {...register("availableQuentity",)}
                            />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  font-bold"> minimum Quentity</span>
                            </label>
                            <input type="text"
                                placeholder="quentity"
                                class="input input-bordered"
                                {...register("minimumQuentity",)}
                            />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text  font-bold">Sort description</span>
                            </label>
                            <input type="text"
                                placeholder="description"
                                class="input input-bordered"
                                {...register("description",)}
                            />

                        </div>
                        <div class="form-control">
                            <label class="label  " >
                                <span class="label-text">Image</span>
                            </label>
                            <input type="file"
                                className='btn btn-primary'
                                onChange={handleUploadImage}

                                name='image' />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;