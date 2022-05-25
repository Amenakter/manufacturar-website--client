import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ inventories }) => {
    const { _id, ProductName, image, price, description, avaliableQuentity, minimumQuentity } = inventories;
    const navigate = useNavigate()
    const handleBuy = id => {
        console.log(id);
        navigate(`/purchase/${id}`)

    }
    return (
        <div >
            <div class="card lg:w-80 w-full bg-neutral sshadow-xl ">
                <figure className='px-4 pt-4' >
                    <img height='80px' src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary font-bold">{ProductName}</h2>
                    <p >{description}</p>
                    <p >Price: $<span className='font-bold'>{price} (per unit price)</span></p>
                    <div className='flex justify-between items-center '>
                        <p  >Available quentity:<span className='font-bold'> {avaliableQuentity}</span></p>
                        <p >Minimum quentity:<span className='font-bold'> {minimumQuentity}</span></p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-primary" onClick={() => handleBuy(_id)}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;