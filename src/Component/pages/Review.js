import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.intit';

const Review = () => {
    const [reviews, setReviews] = useState([])
    const [user] = useAuthState(auth)
    console.log(user);

    useEffect(() => {
        fetch('https://damp-meadow-76424.herokuapp.com/reveiws')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user])

    return (
        <div className='mb-16'>
            <h2 className='text-4xl text-primary text-center mt-16 font-bold'>Customer Review</h2>

            <div className='divider'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =>
                        <div className="card lg:w-lg bg-base-100 shadow-xl  mt-16">
                            <div className="card-body">
                                <div className='ml-4'>
                                    <h3 className='font-semibold text-primary'>{review.username}</h3>
                                    <h3>{reviews.location}</h3>
                                </div>
                                <p>{review.review}</p>
                                <div className="flex items-center mt-4 ">
                                    <div className="avatar ">
                                    </div>
                                    <div className='ml-4 flex items-center justify-center'>
                                        <h3 className='font-semibold'>({review.rating})</h3>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning" ></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Review;