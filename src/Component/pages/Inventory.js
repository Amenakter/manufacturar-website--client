import React, { useEffect, useState } from 'react';
import Products from './Products';

const Inventory = () => {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch('https://damp-meadow-76424.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-primary text-center text-2xl font-bold mt-16'>OUR TOOLS</h3>
                <p>YOUR CHOISE</p>
                <p>AND YOUR CHOISE IS THE BEST CHOISE</p>
            </div>
            <div className='divider'></div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 p-8">
                {
                    inventory.slice(0, 6).map(inventories => <Products
                        key={inventories._id}
                        inventories={inventories}
                    >
                    </Products>)
                }
            </div>


        </div>
    );
};

export default Inventory;