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
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to='/login'
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Log In
                            </Link>

                            <Link
                                to='/register'
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div class="flex justify-center relative bg-[url(https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg)] bg-cover bg-center bg-no-repeat">
                <div class="flex flex-col items-center justify-center">

                    <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div class="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <div class="text-3xl md:text-7xl font-bold ">
                                Set Your Future With Technology World Look More Charming</div>
                        </div>
                        <div
                            class="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                            <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                            </div>
                            <div class="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                            </div>
                            <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>

        </div>
    );
};

export default Heading;