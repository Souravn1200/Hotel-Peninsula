import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <span className="w-5/20 loading loading-spinner ml-[570px]"></span>
    }
    

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;