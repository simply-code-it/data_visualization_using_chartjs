import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {isLogin} = useContext(AuthContext);
    if(!isLogin){
        console.log('login is false');
        return <Navigate to="/login"/>;
    }

    return children;
}

export default PrivateRoute;