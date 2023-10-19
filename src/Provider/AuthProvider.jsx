import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../assets/Firebase/Firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    

    const googleSignin =() =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        signUp,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;