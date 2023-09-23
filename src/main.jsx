import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        loader: () => fetch('../jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      }, 
      {
        path: '/jobs',
        loader: () => fetch('../jobs.json'),
        element: <Jobs></Jobs>
      }, 
      {
        path: '/statistics',
        loader: () => fetch('../statistics.json'),
        element: <Statistics></Statistics>
      }, 
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        loader: () => fetch('../jobs.json'),
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
