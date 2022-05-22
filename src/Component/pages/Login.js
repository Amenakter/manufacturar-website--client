import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div class="hero h-screen bg-base-100">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                    <div class="card-body">
                        <h2 className='text-2xl font-bold text-center'>Please Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text  font-bold">Email</span>
                                </label>
                                <input
                                    type="text"
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
                                <span class="label-text-alt link text-xs font-bold text-red-500">Forgot password?</span>
                            </div>
                            <div class="label">
                                <p className='label-text  font-bold '>If Haven't Account, <Link to="/register" class="label-text-alt link text-xs font-bold text-success">Create an Account</Link></p>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;