import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));

const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Navigate to='/login' />
    }
];

export default routes;