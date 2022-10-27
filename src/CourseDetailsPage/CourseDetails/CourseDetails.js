import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import InstructorCard from '../../components/InstructorsCard/InstructorCard';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import ReactPrint from 'react-to-print'
import { useRef } from 'react';


const CourseDetails = () => {
    const ref = useRef()
    const course = useLoaderData();
    const { name, Duration, author_name, img, last_update, rating, Enrolled, price, reviews, description, author_img, quality, requirements, course_id } = course;
    const descriptionPera = description.split('$');
    const eachRequirements = requirements.split('$');
    return (
        <div className=" text-slate-300 bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <section
                className="relative bg-[url(https://wallpapercave.com/wp/wp6941054.jpg)] bg-cover bg-center bg-no-repeat"
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
                                {name} course.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl text-cyan-800 sm:leading-relaxed">
                            Welcome to learn <span className="text-green-500 font-semibold">{name}</span>, and set your bright future...
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center text-black">
                            <p>Last Update: <span className="text-lime-900 font-bold">{last_update}</span> </p>
                            <p>Enrolled: <span className="text-cyan-500 font-bold">{Enrolled}</span> </p>
                            <p className="flex items-center text-fuchsia-800 font-bold"><span className="text-orange-500 flex mr-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span> {rating}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:flex-col-reverse mx-5 py-10 px-10">
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-lime-700 text-3xl mb-2 font-bold">Description</h2>
                    {descriptionPera.map(pera => <p>{pera}</p>)}
                    <h2 className="text-green-800 text-3xl mb-2 mt-5 font-bold">What We Learn</h2>
                    {descriptionPera.map(pera => <p>{pera}</p>)}
                    <h2 className="text-yellow-800 text-3xl mb-2 mt-5 font-bold">Requirements</h2>
                    {eachRequirements.map(requirement => <p>{requirement}</p>)}
                    <h2 className="text-sky-800 text-3xl mb-2 mt-5 font-bold">Instructors</h2>
                    <InstructorCard img={author_img} quality={quality} reviews={reviews} rating={rating} name={name}></InstructorCard>

                </div>
                <div className="col-span-1 mt-[-200px]">
                    <div ref={ref}
                        className="relative bg-[url(https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 sm:pb-6 sm:pt-64" style={{ backgroundImage: `url(${img})` }}
                    >
                        <span className="absolute inset-0 bg-gray-900/25"></span>

                        <strong
                            className="absolute top-4 left-0 bg-red-600 py-1.5 px-3 text-xs uppercase tracking-wider text-white"
                        >
                            10% Offer
                        </strong>
                        <strong
                            className="absolute top-4 right-0 py-1.5 px-3 text-xs uppercase tracking-wider text-black"
                        >
                            <ReactPrint trigger={() => <button className="bg-red-300 py-2 px-3 rounded-lg text-lg">Download pdf</button>} content={() => ref.current} />
                        </strong>


                        <div className="relative text-center">
                            <h3
                                className="text-2xl my-3 text-amber-500 font-bold uppercase tracking-wider text-white sm:text-3xl"
                            ><span className="text-white">Price: {price} $</span> <br />
                                Save
                                <span
                                    className="relative inline-block before:absolute before:inset-x-0 before:bottom-0.5 before:h-2 before:bg-red-600"
                                >
                                    <span className="relative"> 10% </span>
                                </span>
                                on <br /> <span className="text-cyan-500">{name}</span>
                            </h3>
                            <div className="text-start mt-5 font-semibold">

                                <p>Last Update: <span className=" text-lime-900 font-bold">{last_update}</span> </p>
                                <p>Enrolled: <span className="text-cyan-500 font-bold">{Enrolled}</span> </p>
                                <p className="flex items-center text-fuchsia-800 font-bold">Rating:<span className="text-orange-500 flex mr-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span> {rating}</p>
                                <p>Duration: <span className="text-cyan-500 font-bold">{Duration}</span> </p>
                                <p>Course Level: <span className="text-slate-300 font-bold">All Levels</span> </p>
                                <p>Instructor: <span className="text-cyan-500 font-bold">{author_name}</span> </p>
                            </div>
                            <Link
                                className="mt-6 block bg-gradient-to-t from-green-500 to-amber-500 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                            >
                                Buy Now
                            </Link>
                            <Link
                                className="mt-6 block bg-gradient-to-t from-red-500 to-green-500 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                            >
                                Add To Cart
                            </Link>
                            <Link
                                className="mt-6 block bg-gradient-to-t from-amber-500 to-lime-500 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                            >
                                Share
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                className="flex items-center justify-center rounded-xl mx-10 text-black border-4 border-black bg-gradient-to-t from-red-400 to-amber-200 px-8 py-4 mt-5 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
                to={`/items/${course_id}`}
            >
                Get Premium Access <span aria-hidden="true" className="ml-1.5 " role="img">🤔</span>
            </Link>
        </div>
    );
};

export default CourseDetails;