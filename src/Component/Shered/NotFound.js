import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/5224474.jpg'


const NotFound = () => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "100%"

        }}>
            <h2 className='text-8xl text-center text-red-500 py-6'>Oppss !!!</h2>
            <p className='text-4xl text-center text-warning'>Your searching page is not Found</p>
            <div className='text-center mt-8'>
                <i class="fa-solid fa-screwdriver-wrench text-8xl text-base-200 "></i>
            </div>

            <div className='text-center mt-8'>
                <button className='btn btn-warning  w-52'><Link to='/'> Go back</Link></button>
            </div>
        </div>
    );
};

export default NotFound;