import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../assets/Firebase/Firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin =() =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return () =>{
            unSubscribe()
        }
    },[auth])

    const authInfo = {
        user,
        signUp,
        signIn,
        googleSignin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;