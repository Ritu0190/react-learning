import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout';
import Filtering from './Pages/Filtering';
import Carts from './Components/Filtering/Carts';
import SignUp from './Components/SignUp/SignUp';
import MovieFilter from './Pages/MovieFilter';
import Todo from './Pages/Todo';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
  },
  {
    path:'/app',
    element: <App/>,
  },
  {
    path:'/filtering',
    element: <Filtering/>,
  },
  {
    path:'/carts',
    element: <Carts/>,
  },
  {
    path:'/signup',
    element: <SignUp/>,
  },
  {
    path:'/moviefilter',
    element: <MovieFilter/>,
  },
  {
    path:'/todo',
    element: <Todo/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} />
);

