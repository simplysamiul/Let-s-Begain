import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
import './LogIn.css';

const LogIn = () => {
    const { googleSignIn } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";
    const handelGoogleSignIn =() =>{
        googleSignIn()
        .then(result => {
            history.push(redirect_url);
        });

    }
    return (
        <div className="login-button">
            <button onClick={handelGoogleSignIn}>Google-Log-IN</button>
        </div>
    );
};

export default LogIn;