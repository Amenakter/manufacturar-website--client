import React from 'react';
import Products from './Products';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading'

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/products').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>total product:{products.length}</h3>
            <div className="grid grid-cols-1 grid-cols-1 gap-3 p-8">

                {
                    products.map(product =>
                        <Products
                            key={product._id}
                            product={product}
                            refetch={refetch}
                        ></Products>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;