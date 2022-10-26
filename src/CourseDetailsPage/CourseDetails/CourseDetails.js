import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, author_name } = course;
    return (
        <div>
            <h1>this is course details {name}</h1>
        </div>
    );
};

export default CourseDetails;