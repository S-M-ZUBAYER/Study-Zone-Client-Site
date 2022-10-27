import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/AboutPage/About/About';
import LogIn from '../../components/AuthPages/LogIn/LogIn';
import Register from '../../components/AuthPages/Register/Register';
import Blog from '../../components/BlogPage/Blog';
import Contact from '../../components/ContactPage/Contact';
import Courses from '../../components/CoursesPage/Courses/Courses';
import FAQ from '../../components/FAQPage/FAQ/FAQ';
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
                loader: () => fetch('https://study-zone-server-site.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://study-zone-server-site.vercel.app/courses'),
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://study-zone-server-site.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
]);
