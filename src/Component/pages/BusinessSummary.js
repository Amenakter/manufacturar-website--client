import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mt-16'>
            <div class=" w-full bg-base-100 shadow-xl shadow-info p-8">
                <h3 className='text-5xl  text-center text-primary py-4'>Business Summary</h3>
                <h3 className='text-2xl  text-center '>YOUR FAITH IS  OUR SUCCESS</h3>
                <div class="divider"></div>
                <div class="card-body mt-16">
                    <div className='lg:flex sm:flex-row  justify-between'>
                        <div className='flex flex-col justify-center items-center'>
                            <div class="avatar placeholder">
                                <div class="bg-info rounded-full  w-28">
                                    <i class="fa-solid fa-hand-holding-droplet text-6xl text-white "></i>
                                </div>
                            </div>
                            <p className='font-bold py-2  text-5xl text-primary mt-4 font-mono'>120M+</p>
                            <p className='font-bold  py-2 text-3xl text-primary font-mono'>Annual revenue</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div class="avatar placeholder">
                                <div class="bg-info text-warning-content rounded-full w-28">
                                    <i class="fa-solid fa-star text-white text-2xl"></i>
                                    <i class="fa-solid fa-star text-white text-2xl"></i>
                                    <i class="fa-solid fa-star text-white text-2xl"></i>
                                    <i class="fa-solid fa-star text-white text-2xl"></i>
                                </div>
                            </div>
                            <p className='font-bold py-2  text-5xl text-primary mt-4 font-mono'>33K+ </p>
                            <p className='font-bold  py-2 text-3xl text-primary font-mono'> Reviews</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div class="avatar placeholder">
                                <div class="bg-info text-warning-content rounded-full w-28">
                                    <i class="fa-solid fa-screwdriver-wrench text-6xl text-white"></i>
                                </div>
                            </div>
                            <p className='font-bold py-2  text-5xl text-primary mt-4 font-mono'> 50+  </p>
                            <p className='font-bold  py-2 text-3xl text-primary font-mono'>tools</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div class="avatar placeholder">
                                <div class="bg-info text-warning-content rounded-full w-28">
                                    <i class="fa-solid fa-users text-6xl text-white"></i>
                                </div>
                            </div>
                            <p className='font-bold py-2  text-5xl text-primary mt-4 font-mono'> 100+</p>
                            <p className='font-bold  py-2 text-3xl text-primary font-mono'> customers</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='shadow-lg  py-16 bg-info rounded-2xl mx-auto mt-[-50px] relative lg:w-4/6 w-full mb-16' >
                <div className="lg:flex flex-row items-center justify-between px-12 gap-3 ">
                    <p className='text-4xl text-white font-bold'>Any Curiosity to knows about us , please contact us</p>
                    <div className='mt-6'>
                        <button class="btn btn-primary w-36 p-4 font-bold ">Contact us</button>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default BusinessSummary;