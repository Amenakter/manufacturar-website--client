import React from 'react';

const ExproleVideo = () => {
    return (
        <div >
            <div className='pt-24 '>
                <h2 className='text-4xl text-primary font-bold text-center '>REALABLE <br /> MANUFATURING</h2>
                <div className='divider'></div>
            </div>
            <div className='lg:flex items-center justify-center bg-neutral '>
                <iframe
                    src="https://www.youtube.com/embed/7wQmNHZhp0g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer;
                 autoplay; 
                clipboard-write;
                 encrypted-media;
                 gyroscope; 
                 picture-in-picture"
                    allowfullscreen className='mb-8 w-full h-96'>

                </iframe>

                <div className=' p-8'>
                    <h2 className='text-4xl text-secondary ml-8 font-bold'>From design to delivery, we focus on detail and improve continuously.</h2>
                </div>
            </div>

        </div>
    );
};

export default ExproleVideo;