import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../../components/AuthPages/LogIn/LogIn';
import Register from '../../components/AuthPages/Register/Register';
import Courses from '../../components/CoursesPage/Courses/Courses';
import Heading from '../../components/HomePage/Heading/Heading';
import Home from '../../components/HomePage/Home/Home';
import Main from '../../components/Main/Main';
import ErrorPage from '../../components/SharePages/ErrorPage/ErrorPage';
import CourseDetails from '../../CourseDetailsPage/CourseDetails/CourseDetails';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Heading></Heading>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/header',
                element: <Heading></Heading>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
]);
