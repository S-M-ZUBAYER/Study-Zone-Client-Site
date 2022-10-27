import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/logIn.jpg'
import img_logo from '../../../assets/company_logo.ico'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const LogIn = () => {

    const navigate = useNavigate()
    const [error, setError] = useState('');
    const { loading, signIn, setLoading, LogInWithGoogle, logInWithGithub, logInWithFacebook } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const handlerLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Log In successfully')
                if (user?.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    // toast.error("Your Email wasn't verified. please verify first!!!")
                }

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const SignInWithGoogle = () => {
        LogInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Log In successfully')
                if (user?.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    // toast.error("Your Email wasn't verified. please verify first!!!")
                }
            })
            .catch(error => console.error(error))
    }
    const singInWithGithub = () => {
        logInWithGithub(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Log In successfully')
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    // toast.error("Your Email wasn't verified. please verify first!!!")
                }
            })
            .catch(error => console.error(error))
    }
    const singInWithFacebook = () => {
        logInWithFacebook(facebookProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Log In successfully')
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    // toast.error("Your Email wasn't verified. please verify first!!!")
                }

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <div className="bg-white dark:bg-gray-900 ">
                <div className="flex justify-center h-screen bg-gradient-to-t from-black via-slate-800 to-gray-900 text-slate-300">
                    <div className="hidden bg-cover  rounded-lg lg:block lg:w-1/2  m-16 " style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div className='text-center'>
                                <h2 className="text-4xl font-bold text-white">Log In</h2>

                                <p className="max-w-xl mt-3 text-gray-300 text-lg font-semibold">
                                    If you would like to got these courses from our site. First of all you have to Sign In. Please Sign In and enjoy your interesting courses...
                                </p>
                            </div>
                        </div>
                    </div>
                    <section className="bg-white dark:bg-gray-900 lg:w-1/2 mx-auto bg-gradient-to-t from-black via-slate-800 to-gray-900">
                        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                            <div className="w-full max-w-md  rounded-xl p-2 bg-gradient-to-t from-black via-purple-900 to-violet-600">
                                <img className="object-cover w-24 h-24 mx-auto rounded-full" src={img_logo} />

                                <div className="flex items-center justify-center mt-6">
                                    <a href="/" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300 ">
                                        sign in
                                    </a>
                                </div>

                                <form onSubmit={handlerLogIn}>
                                    <div className="relative flex items-center mt-6">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>

                                        <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>

                                        <input type="password" name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                    </div>
                                    <p className="text-orange-900 font-bold"><small>{error}</small></p>
                                    <button type='submit' className=" mt-8 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign In
                                    </button>
                                </form>

                                <div className="flex justify-center space-x-4 mt-4">
                                    <button onClick={SignInWithGoogle} aria-label="Log in with Google" className="p-3 text-xl rounded-sm">
                                        <FaGoogle></FaGoogle>
                                    </button>
                                    <button onClick={singInWithFacebook} aria-label="Log in with Twitter" className="p-3 text-xl rounded-sm">
                                        <FaFacebookF></FaFacebookF>
                                    </button>
                                    <button onClick={singInWithGithub} aria-label="Log in with GitHub" className="p-3 text-xl rounded-sm">
                                        <FaGithub></FaGithub>
                                    </button>
                                </div>

                                <div className="mt-6 text-center ">
                                    <Link to='/register' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                        Don't have any account?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div >
    );
};

export default LogIn;