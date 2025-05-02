import React, { useState } from 'react';
import { Link } from 'react-router';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'

const SignUP = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState(null)
    const [isPassVisible, setIsPassVisible] = useState(false)

    const emailVerificationPopUp = () => {
        Swal.fire({
            title: "Email verification",
            text: "A verification email was sent to your email",
            icon: "info"
        });
    }

    const handleEmailVErification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                emailVerificationPopUp()
            });
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const userName = e.target.name.value
        const photoUrl = e.target.url.value
        const email = e.target.email.value
        const pass = e.target.password.value

        const user = {
            displayName: userName,
            photoURL: photoUrl
        }

        setSuccess('')
        setError(null)

        const digitExist = /(?=.\d)/.test(pass)
        const isLowerCase = /(?=.*[a-z])/.test(pass)
        const isUpperCase = /(?=.*[A-Z])/.test(pass)
        const isPassLong = pass.length > 5

        digitExist || setError('Password must contain at least one digit')
        isLowerCase || setError('Password must contain at least one lowercase character')
        isUpperCase || setError('Password must contain at least one uppercase character')
        isPassLong || setError('Password length must be at least 6 characters long.')



        if (digitExist && isLowerCase && isUpperCase && isPassLong) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(result => {
                    console.log(result)
                    updateProfile(auth.currentUser, user)
                        .then(() => console.log("ProfileUpdated"))
                        .catch(error => console.log(error))
                    setSuccess('Account created successfully.')
                    handleEmailVErification()
                })
                .catch(error => setError(error.message))


        }
    }

    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-100">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold'>Sign UP</h1>
                            <form className="fieldset" onSubmit={handleSignUp}>
                                <label className="label">User Name</label>
                                <input name='name' required type="text" className="input" placeholder="username" />
                                <label className="label">Photo URL</label>
                                <input name='url' required type="text" className="input" placeholder="photo URL" />
                                <label className="label">Email</label>
                                <input name='email' required type="email" className="input" placeholder="Email" />

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
                                <p className='text-green-400'>{success}</p>
                                {error && <p className='text-red-400'>{error}</p>}

                                <label className="label mt-3 mb-0">
                                    <input type="checkbox" required className="checkbox checkbox-sm" />
                                    Accept all terms and conditions.
                                </label>
                                <button type='submit' className="btn btn-neutral">Sign UP</button>
                            </form>
                            <h2>Already have an account? <Link className='underline text-blue-400' to={'/signin'}>Sign IN</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;