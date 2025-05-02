import {
    createBrowserRouter,
} from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import Orders from "../components/Orders";
import Dashboard from "../components/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component:Home
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'orders',
                Component: Orders
            },
            {
                path: 'dashboard',
                Component: Dashboard
            }
            
        ]
    },
]);

export default router
