import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = use(AuthContext)

    if(isLoading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }

    return children
};

export default PrivateRoute;