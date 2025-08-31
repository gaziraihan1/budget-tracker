import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Tracking from "../Pages/TrackPage/Tracking";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: Layout,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: 'register',
                    Component: Register
                },
                {
                    path: '/login',
                    Component: Login
                },
                {
                    path: 'budget-tracker',
                    Component: Tracking
                }
            ]
        }
    ]
)