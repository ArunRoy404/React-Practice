import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    console.log(location);
    
    const {user, isLoading} = use(AuthContext)

    if(isLoading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to={'/login'} state={location.pathname} ></Navigate>
    }

    return children
};

export default PrivateRoute;