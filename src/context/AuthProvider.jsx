import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    signOut,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContetxt = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    
    // create user using google 
    const createUserUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((res)=>{
            const user = res.user;
            console.log(user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    // create user using github 
    const createUserUsingGithub=()=>{
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth,githubProvider)
        .then((res)=>{
            const user = res.user;
            console.log(user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    // create user using email and pasword
    const createUserUsingEmail=(email,password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
    }
    // user login
    const userLogin =(email,password)=>{
       return userLogin(auth,email,password)
    }

    // user logout
    const userLogout =()=>{
        setLoading(true)
       return signOut(auth)
    }

    // user profile updata
    const userProfileUpdate=(auth,currentUser)=>{
        return 
    }


    // user active check
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
           return unSubscribe();
        }
    },[])

    // user info
    const userInfo={
        user,
        loading,
        userLogin,
        userLogout,
        createUserUsingEmail,
        createUserUsingGoogle,
        createUserUsingGithub
    }

  return (
    <AuthContetxt.Provider value={userInfo}>
        {children}
    </AuthContetxt.Provider>
  )
}

export default AuthProvider