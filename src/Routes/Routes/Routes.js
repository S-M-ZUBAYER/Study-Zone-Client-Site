import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Heading from '../../components/HomePage/Heading/Heading';
import Main from '../../components/Main/Main';
import ErrorPage from '../../components/SharePages/ErrorPage/ErrorPage';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Heading></Heading>
            }
        ]
    }
]);
