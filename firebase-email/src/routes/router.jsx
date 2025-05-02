import { createBrowserRouter } from "react-router";
import SignUP from "../components/SignUP";
import Home from "../components/Home";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                Component: SignUP
            },
            {
                path: 'signin',
                Component: Login
            }
        ]
    },
]);

export default router