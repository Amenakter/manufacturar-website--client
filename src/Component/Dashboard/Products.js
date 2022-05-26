import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Products = ({ product, refetch }) => {
    const { _id, image, ProductName, price, description, avaliableQuentity, minimumQuentity } = product;
    const [deleteProduct, setDeleteProduct] = useState([])
    const handleDeleteProduct = id => {
        const url = (`http://localhost:5000/products/${id}`);
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainignProduct = deleteProduct.filter(pro => pro._id !== id)
                    refetch();
                    setDeleteProduct(remainignProduct);
                    toast.error('deleted')
                }
            })
    }
    return (
        <>
            <div class="hero sm:w-full bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={image} class="w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-2xl font-bold text-center">{ProductName}</h1>
                        <p class="py-1">Available Quentity:{avaliableQuentity}</p>
                        <p class="py-1">Minimum: Quentity{minimumQuentity}</p>
                        <p class="py-1">Price:{price}</p>
                        <p class="py-1">Details:{description}</p>
                        <button>
                            <label for="my-modal-6"

                                class="btn btn-primary w-48 text-center mt-4">
                                delete
                            </label>
                        </button>
                    </div>
                </div>
            </div >
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Hey!!!</h3>
                    <p class="py-2 text-warning">Are you want to <span className='text-red-500 font-bold '> delete  {ProductName}</span> product /Tool?</p>
                    <div class="modal-action">
                        <label for="my-modal-6" onClick={() => handleDeleteProduct(_id)} class="btn btn-error">Confirm</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;