import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>, 
    children:[
      {path:'/',
    element:<Signup />},
      {
        path:'/signup',
        element:<Signup />,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
      
    ]
  }])
root.render(
  <React.StrictMode>
<RouterProvider router={routes} />  
</React.StrictMode>
);

