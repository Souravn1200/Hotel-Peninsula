import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
        <div className='flex justify-center items-center h-screen gap-10'>
            
            <div> 

                    <img src="https://i.ibb.co/G3Pgsgq/preview.png" className='h-[600px] -ml-16
                    ' alt="" />

            </div>
            <div className=''>
                <h2 className="text-3xl my-6 text-left font-serif">Please Login</h2>
                <form className="mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#3d657a] hover:bg-[#6096B4]">Login</button>
                    </div>
                </form>

                <div className="form-control mt-6 w-1/2 mx-auto">
                    {/* <button onClick={handleGoogleRegister} className="btn text-white bg-[#3d657a] hover:bg-[#6096B4]">Register By Google</button> */}
                </div>

                <p className="text-center mt-4">Do not have an account?  <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>

                {
                // loginError && <p className='text-red-600 font-semibold text-center mt-4'>{loginError}</p>
            }
            </div>

        </div>
    );
};

export default Login;