import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.intit';
import img from "../../images/2456038.jpg"
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth)

    console.log(user)
    const handleSubmit = (event) => {

        event.preventDefault();
        const userReview = {
            username: user.displayName,
            rating: event.target.rating.value,
            review: event.target.review.value

        }
        console.log(userReview);

        fetch('https://damp-meadow-76424.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(userReview)

        })
            .then(res => res.json())
        toast.success('Thanks For Four Greatfull Review.🤩')
        event.target.rating.value = ""
        event.target.review.value = ''



    }
    return (
        <div className='lg:flex justify-center items-center lg:flex-row-reverse'>
            <div className='lg:w-3/4  '>
                <img src={img} alt="" />
            </div>
            <div class="card flex-shrink-0 lg:w-full  max-w-sm  ">
                <form onSubmit={handleSubmit}>
                    <div class="card-body">
                        <h2 className='text-2xl text-secondary font-bold' >Give Feedback</h2>
                        <p>What to you think of the issue search experience within the project</p>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' value={user.displayName} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold">feedback</span>
                            </label>
                            <input type="number" name='rating' placeholder="Rating..." class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold">what are the main reason for ratign?</span>
                            </label>
                            <textarea type="text" name='review' placeholder="Review..." class="textarea textarea-bordered h-24" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReview;