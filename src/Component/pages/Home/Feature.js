import React from 'react';
import img1 from '../../../images/Service01.jpg';
import img2 from '../../../images/Service02.jpg';
import img3 from '../../../images/Service03.jpg';
import img4 from '../../../images/Service04.jpg';
import img5 from '../../../images/Service05.jpg';

const Feature = () => {
    return (
        <div>
            <h2 className='text-center text-xl tracking-widest py-4'> Our Products</h2>
            <h2 className='text-3xl text-primary font-bold text-center'>FIND THE MOST SUITABLE TOOL</h2>
            <div className='lg:flex items-center lg:justify-center gap-5 mt-8 '>

                <img src={img1} alt="" class=" lg:w-52 w-72 mb-8 ml-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
                <img src={img2} alt="" class=" lg:w-52 w-72 mb-8 ml-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
                <img src={img3} alt="" class=" lg:w-52 w-72 mb-8 ml-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
                <img src={img4} alt="" class=" lg:w-52 w-72 mb-8 ml-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
                <img src={img5} alt="" class=" lg:w-52 w-72 mb-8 ml-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />



            </div>
        </div>
    );
};

export default Feature;