import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.intit';
import Loading from '../Shered/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        console.log(error.message)
    }
    if (user) {
        navigate('/')
    }
    const onSubmit = data => {
        console.log(data);
        // const name = data.name;
        const email = data.email;
        const password = data.password;
        // console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)

    };
    return (
        <div>
            <div class="hero h-screen bg-base-100">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                    <div class="card-body">
                        <h2 className='text-2xl font-bold text-center'>Please Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text  font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    class="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is requireds"
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.name.message}</span>}


                                </label>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text  font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    class="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is requireds"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Your email is invalid ,Provid a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-bold">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text  font-bold">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    class="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is requireds"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'password will be 8 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-bold">{errors.password.message}</span>}

                                </label>
                            </div>
                            <div class="label">
                                <p className='label-text  font-bold' >Already have an account ,<Link to="/login" class="label-text-alt link text-xs font-bold text-success"> Please login</Link></p>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;