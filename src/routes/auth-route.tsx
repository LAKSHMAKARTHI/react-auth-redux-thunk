/* 
    Developed by LK - Feb 2022 
*/

import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import { checkAuth } from '../utils/services';

export function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    if (checkAuth() === null) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

  