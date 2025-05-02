import React, { use } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import AuthContext from '../contexts/AuthContext';

const Root = () => {

    const user = use(AuthContext)
    console.log(user);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;