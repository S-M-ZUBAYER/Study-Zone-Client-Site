import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/logIn.jpg'
import img_logo from '../../../assets/company_logo.ico'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {

    const navigate = useNavigate()
    const [error, setError] = useState('');
    const { signIn, setLoading, LogInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider()
    const handlerLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    // toast.error("Your Email wasn't verified. please verify first!!!")
                }

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const SignInWithGoogle = () => {
        LogInWithGoogle(googleProvider)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <div class="bg-white dark:bg-gray-900">
                    <div class="flex justify-center h-screen">
                        <div class="hidden bg-cover lg:block lg:w-1/2 ml-auto" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}>
                            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div>
                                    <h2 class="text-4xl font-bold text-white">Brand</h2>

                                    <p class="max-w-xl mt-3 text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                        autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                        molestiae
                                    </p>
                                </div>
                            </div>
                        </div>
                        <section class="bg-white dark:bg-gray-900 lg:w-1/2 mx-auto">
                            <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                                <div class="w-full max-w-md">
                                    <img class="object-cover w-24 h-24 mx-auto rounded-full" src={img_logo} />

                                    <div class="flex items-center justify-center mt-6">
                                        <a href="#" class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                                            sign in
                                        </a>
                                    </div>

                                    <form onSubmit={handlerLogIn}>
                                        <div class="relative flex items-center mt-6">
                                            <span class="absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </span>

                                            <input type="email" name='email' class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                        </div>

                                        <div class="relative flex items-center mt-4">
                                            <span class="absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </span>

                                            <input type="password" name='password' class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                        </div>
                                        <button type='submit' class=" mt-8 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign In
                                        </button>
                                    </form>
                                    <div class="mt-6">



                                        <p className="my-2"><small>or Sign In with</small> </p>
                                        <button onClick={SignInWithGoogle} class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign In With Google
                                        </button>

                                        <div class="mt-6 text-center ">
                                            <Link to='/register' class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                                Already have an account?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div >

        </div >
    );
};

export default LogIn;