import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.intit'
import Loading from '../Shered/Loading';
import useToken from '../hook/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    let authenticationError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])
    if (gLoading || loading) {
        return <Loading></Loading>
    }
    if (gError || error) {
        authenticationError = <p className='text-red-500'>{error?.message} || {gError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset();
    };


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
                                    name='email'
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
                                <span class="label-text-alt link text-xs font-bold text-red-500" >Forgot password?</span>
                            </div>
                            <div class="label">
                                <p className='label-text  font-bold '>If Haven't Account, <Link to="/register" class="label-text-alt link text-xs font-bold text-success">Create an Account</Link></p>
                            </div>
                            {authenticationError}
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>

                        </form>

                        <div class="divider">OR</div>
                        <div class="form-control mt-6">
                            <button class="btn btn-outline hover:btn-primary" onClick={() => signInWithGoogle()}>Countinue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;