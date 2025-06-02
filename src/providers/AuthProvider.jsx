import { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInfo = {
        name:'name is EKD'
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