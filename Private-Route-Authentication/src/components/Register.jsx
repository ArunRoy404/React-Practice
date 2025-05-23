import React, { use, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router';
import AuthContext from '../contexts/AuthContext';


const Register = () => {
    const { createUser } = use(AuthContext)

    const [isPassVisible, setIsPassVisible] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')



    const handleCreateUser = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')

        createUser(email, password)
            .then(() => {
                setSuccess('Account created successfully')
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-100">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold'>Register</h1>
                            <form onSubmit={handleCreateUser} className="fieldset">
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
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                            </form>
                            <h2>Already have an account? <Link className='underline text-blue-400' to={'/login'}>Log IN Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;