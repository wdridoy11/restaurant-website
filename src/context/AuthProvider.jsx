import React, { createContext, useState } from 'react';
import {
    getAuth,
    signOut,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
} from 'firebase/auth'
import app from '../utils/firebase/firebase.config';
export const AuthContetxt = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
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

    // user login
    const userLogin =(email,password)=>{
       return userLogin(auth,email,password)
    }

    // user logout
    const userLogout =()=>{
       return signOut(auth)
    }

    // user info
    const userInfo={
        user,
        userLogout,
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