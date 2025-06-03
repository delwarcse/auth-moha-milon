import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        // return <span className="loading loading-infinity loading-xl"></span>;
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children;
    }
    return (
       <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;