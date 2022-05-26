import React from 'react';
import b1 from '../../../images/b.png';
import b2 from '../../../images/b2.png';
import b3 from '../../../images/b3.png';
import b4 from '../../../images/b4.png';

const Landing = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={b1} class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img height='200px' src={b2} class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={b3} class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={b4} class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Landing;