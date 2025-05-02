import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import Swal from 'sweetalert2'

const Login = () => {

    const emailRef = useRef(null)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)


    const notifyPassReset = () => {
        Swal.fire({
            title: "Password Reset",
            text: "Password reset email sent",
            icon: "success"
        });
        setSuccess('Password reset email sent')
    }

    const notifyEmailVerification = (user) => {
        console.log(user);
        if (user.emailVerified === false) {
            Swal.fire({
                title: "Email verification",
                text: "Please Verify your email",
                icon: "info"
            });

            setError("Please verify your email")
            return
        }
        setSuccess('Sign IN successful')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                notifyEmailVerification(result.user)
            })
            .catch(error => setError(error.message))
    }

    const handlePasswordReset = () => {
        setError('')
        const email = emailRef.current.value
        if (!email) {
            setError('Provide Email address')
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                notifyPassReset()
            })
            .catch(error => setError(error.message))
    }


    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-100">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold'>Sign IN</h1>
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" />

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
                                <button onClick={handlePasswordReset} type='button' className='text-left cursor-pointer'>Forgot password?</button>
                                <button type='submit' className="btn btn-neutral mt-4">Sign IN</button>

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                            </form>
                            <h2>Don't have an account? <Link className='underline text-blue-400' to={'/'}>Sign UP</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;