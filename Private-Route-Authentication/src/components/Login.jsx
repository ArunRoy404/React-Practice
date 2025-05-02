import React, { use, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../contexts/AuthContext';

const Login = () => {
    const { logIn, googleLogIn } = use(AuthContext)

    const [isPassVisible, setIsPassVisible] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isBtnLoading, setIsBtnLoading] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')
        setIsBtnLoading(true)

        logIn(email, password)
            .then(result => {
                console.log(result)
                setSuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => setError(error.message))
            .finally(()=>{
                setIsBtnLoading(false)
            })
    }

    const handleGoogleLogIn = () => {
        setSuccess('')
        setError('')

        googleLogIn()
            .then(result => {
                console.log(result)
                setSuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => setError(error.message))
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-100">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold'>Log IN</h1>
                            <form onSubmit={handleLogIn} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input name='password' required type={isPassVisible ? 'text' : "password"} className="input pr-13" placeholder="Password" />
                                    <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-3 top-2 z-10'>
                                        {
                                            isPassVisible
                                                ? <FaEyeSlash />
                                                : <FaEye />
                                        }
                                    </button>
                                </div>
                                <button type='button' className='text-left cursor-pointer'>Forgot password?</button>
                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>
                                <button type='submit' className="btn btn-neutral mt-4">
                                    {isBtnLoading && <span className="loading loading-spinner"></span>}
                                    Log IN
                                </button>
                            </form>

                            <button onClick={handleGoogleLogIn} className="btn btn-neutral ">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" ></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <h2>Don't have an account? <Link className='underline text-blue-400' to={'/register'}>Register Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;