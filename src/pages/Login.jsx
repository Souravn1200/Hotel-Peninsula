import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Mytoast from '../components/Mytoast';
import swal from 'sweetalert';


const Login = () => {

    const{logInUser, createUserByGoogle} = useContext(AuthContext)
    const [loginError, setLoginError] = useState()
    const navigate = useNavigate()
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true)
      

    }

    const handleCloseToast = () => {
        setShowToast(false)
    }

    const handleLogin = e => {
        e.preventDefault();
        
       const form = new FormData(e.currentTarget)
       const email =  form.get('email')
       const password =  form.get('password')

       setLoginError('');

       logInUser(email, password)
       .then(result => {
        
        swal("Good job!", "You clicked the button!", "success");
        navigate(location?.state ? location.state : '/')
        
        console.log(result);
       })
       .catch(error => {
           setLoginError(error.message)
          });

          
       }


       const handleGoogleRegister = () =>{
        createUserByGoogle()
        .then(result => {

            console.log(result)
        })
        .catch(error => {
        setLoginError(error.message)
       });
}

    return (


        
        <div className='flex justify-center items-center h-screen gap-10'>
            
            <div> 

                    <img src="https://i.ibb.co/G3Pgsgq/preview.png" className='h-[600px] -ml-16
                    ' alt="" />

            </div>
            <div className=''>
                <h2 className="text-3xl my-6 text-left font-serif">Please Login</h2>
                <form onSubmit={handleLogin} className="mx-auto">
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
                        <button className="btn text-white bg-[#3d657a] hover:bg-[#6096B4]" >Login</button>
                    </div>
                </form>

                <div className="form-control mt-6 w-1/2 mx-auto">
                    <button onClick={handleGoogleRegister} className="btn text-white bg-[#3d657a] hover:bg-[#6096B4]">Register By Google</button>
                </div>

                <p className="text-center mt-4">Do not have an account?  <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>

                {
                loginError && <p className='text-red-600 font-semibold text-center mx-auto mt-4 w-2/3'>{loginError}</p>
            }
            </div>
<Mytoast
                message="Login successful"
                showToast={showToast}
                onClose={() => handleCloseToast()}
            />
        </div>
    );
};

export default Login;