import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../assets/Firebase/Firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const googleSignin =() =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;