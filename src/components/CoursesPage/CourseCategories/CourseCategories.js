import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Items from '../Items/Items';

const CourseCategories = () => {
    const courses = useLoaderData();
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-red-300"><span className="text-green-500">Available</span> Courses</h1>
            {
                courses.map(course => <Link to={`/courses/:${course.id}`}><Items key={course.id} course={course}></Items></Link>)
            }
        </div>
    );
};

export default CourseCategories;