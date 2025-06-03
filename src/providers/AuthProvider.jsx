import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log('currently logged user', currentUser);
    //     setUser(currentUser);
    //     }
    //     else {
    //         console.log('no user logged in')
    //     setUser(null);
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])


    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Create Context setup process:
// 1. create cosntext with null as default
// 2. create provider
// 3. set a  value with something (authInfo)
// 4. [          ]
// 5. use the authProvider in the main.jsx
// 6. access the children inside the authProvider in the main.jsx
// 7. export auth context