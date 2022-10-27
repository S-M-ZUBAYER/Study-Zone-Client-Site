import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Heading from '../Heading/Heading';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className="text-slate-400 bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <Heading></Heading>
            <h2 className="font-bold text-3xl mt-12 text-center"><span className="text-lime-500">Courses</span> We Offer!!!</h2>
            <p className="mx-10 font-medium text-center mt-3">We understand that you need flexible course options to gather knowledge, career, and other life commitments. We offer a variety of ways for you to take courses so you can find the option that works best with your schedule, including courses that you got it in online. </p>
            <div className="mt-12 mx-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => <Link to={`/courses/:${course.id}`}><CourseCard key={course.id} course={course}></CourseCard></Link>)}
            </div>
        </div>
    );
};

export default Home;