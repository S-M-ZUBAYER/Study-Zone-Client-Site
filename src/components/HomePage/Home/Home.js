import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Heading from '../Heading/Heading';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <Heading></Heading>
            <h2 className="font-bold text-3xl mt-12 "><span className="text-lime-500">Courses</span> We Offer!!!</h2>
            <p className="mx-10 font-medium mt-3">We understand that you need flexible course options to gather knowledge, career, and other life commitments. We offer a variety of ways for you to take courses so you can find the option that works best with your schedule, including courses that you got it in online. </p>
            <div className="my-12 mx-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-black via-purple-900 to-violet-600">
                <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
                        <h1 className="font-semibold text-3xl text-gray-200 m-2">Log In</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <div className="">
                            <div className="m-1 text-lg text-gray-200 text-semibold">Username</div>
                            <input type="text"
                                className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className="">
                            <div className="m-1 text-lg text-gray-200 text-semibold">Password</div>
                            <input type="password"
                                className="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>

                    </div>
                    <div className="text-center mt-7">
                        <button
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-900 via-purple-900 to-violet-600  font-medium ">login</button>
                    </div>
                </div>
                <div className="text-center my-6 flex flex-col">
                    <a href="#" className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                        Password ?</a>
                    <a href="#" className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                        Not a User? Create New Account</a>
                </div>

            </div>
        </div>
    );
};

export default Home;