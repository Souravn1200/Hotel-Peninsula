import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleAuthProvider = new GoogleAuthProvider()

    const createUser =  (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currnetUser =>{
            console.log('state changed', currnetUser);
           const logEmail = currnetUser?.email||user?.email
            const loggedUser = {email: logEmail}
            setUser(currnetUser)
            setLoading(false)

            if(currnetUser){
           
                axios.post("http://localhost:5000/jwt",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
              }else{
                axios.post("http://localhost:5000/logout",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
              }
            
        })

        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        logInUser,
        createUserByGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;