import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';


const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const LogInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logInWithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logInWithFacebook = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const registerWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserinfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        LogInWithGoogle,
        logInWithGithub,
        logInWithFacebook,
        updateUserinfo,
        logOut,
        registerWithEmail,
        signIn,
        emailVerification,
        setLoading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;