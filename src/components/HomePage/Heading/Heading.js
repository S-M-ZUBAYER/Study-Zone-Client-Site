import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../SharePages/Navbar/Navbar';

const Heading = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold text-lime-700 sm:text-5xl">
                            Welcome To Our

                            <strong className="block font-extrabold text-yellow-500">
                                Study Zone Platform.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl text-cyan-800 sm:leading-relaxed">
                            Welcome to learn modern technology, and set your bright future...
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to='/login'
                                className="block w-full rounded bg-gradient-to-t from-black via-purple-900 to-violet-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Log In
                            </Link>

                            <Link
                                to='/register'
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium bg-gradient-to-t from-red-200  to-orange-400 text-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Heading;