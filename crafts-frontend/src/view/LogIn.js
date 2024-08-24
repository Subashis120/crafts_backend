import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../config/UserReducer';

export default function LogIn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [errors, setErrors] = useState({});

    const handleUserNameChange = (value) => {
        setUsername(value.target.value);
    }

    useEffect(() => {
        localStorage.clear()
    }, []);

    const handlePasswordChange = (value) => {
        setPassword(value.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: username,
            password: password
        }
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');

            const data = {
                username: username,
                password: password
            }

            dispatch(signInUser(data));
            navigate("/");
            //window.location.href="/";

        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (data.email !== '' && data.email !== undefined && !data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        return errors;
    };


    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center"
            style={{ backgroundImage: 'url(https://rukminim2.flixcart.com/image/850/1000/kq6yefk0/sofa-set/d/s/u/black-polyester-steffan-l-shape-8-seater-fabric-sofa-set-with-original-imag496qyy6hspyx.jpeg?q=90&crop=false)' }}>
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-indigo-100 text-center hidden sm:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-10 lg:p-3 sm:p-15">
                    <div>
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="w-10 mx-auto" />
                    </div>
                    <div className=" flex flex-col items-center">
                        <h2 className="text-xl xl:text-2xl font-extrabold">
                            Sign In
                        </h2>
                        <div className="mt-5 w-full flex-1">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs  shadow-sm rounded-lg py-1 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 -ml-4 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4 ">
                                        Sign In with Google
                                    </span>
                                </button>

                                <h2 className="text-md p-2 xl:text-l">
                                    OR
                                </h2>

                                {/* <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <svg className="w-6" viewBox="0 0 32 32">
                                            <path fillRule="evenodd"
                                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign Up with GitHub
                                    </span>
                                </button> */}
                            </div>

                            {/* <div className="my-10 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div> */}

                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-[#4e0083] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email"
                                        value={username}
                                        onChange={handleUserNameChange} />
                                    {errors.email && (
                                        <span className="text-xs font-bold text-red-600" >
                                            {errors.email}
                                        </span>
                                    )}
                                    <input
                                        className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-[#4e0083] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password"
                                        onChange={handlePasswordChange}
                                        value={password} />
                                    {errors.password && (
                                        <span className="text-xs font-bold text-red-600">
                                            {errors.password}
                                        </span>
                                    )}
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-yellow-600 text-gray-100 w-full py-2 rounded-lg hover:bg-[#4e0083] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign In
                                        </span>
                                    </button>
                                </form>
                                <p className="mt-2 text-xs font-bold text-red-600 text-center">
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Forgot Password?
                                    </a>
                                    <Link to="/">
                                        <span className='px-2 text-md text-[#4e0083]'>
                                            Skip Login
                                        </span>
                                    </Link>
                                </p>
                                <p className="mt-2 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}