import initAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initAuthentication();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Google Auth System
    const googleSignIn = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(()=> setIsLoading(false))
        

    }
    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
    },[]);


    // Logout
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=> setIsLoading(false))
    }

    return{
        user,
        googleSignIn,
        logOut,
        isLoading
    }
}

export default useFirebase;