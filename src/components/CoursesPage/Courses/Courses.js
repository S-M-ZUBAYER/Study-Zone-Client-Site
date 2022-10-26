import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../HomePage/CourseCard/CourseCard';
import CourseCategories from '../CourseCategories/CourseCategories';
import CourseHeading from '../CourseHeading/CourseHeading';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <CourseHeading></CourseHeading>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                <div className="col-span-1">
                    <CourseCategories></CourseCategories>
                </div>
                <div className="lg:col-span-2 md:col-span-1">
                    <div className="my-12 mx-10 grid gap-2 sm:grid-cols-1 lg:grid-cols-2">
                        {courses.map(course => <Link to={`/courses/${course.id}`}><CourseCard key={course.id} course={course}></CourseCard></Link>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;