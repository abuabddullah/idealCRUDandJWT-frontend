import React, { useEffect, useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './../../sharedPages/Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    // redirecting route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // get element login with google from hook
    const [signInWithGoogle, user4Google, loading4Google, error4Google] = useSignInWithGoogle(auth);

    // control navigation
    useEffect(() => {
        if (user4Google) {
            toast.success('Logging in Successful', { id: 'login' });
            navigate(from, { replace: true });
        }
    }, [user4Google]);

    // control error
    useEffect(() => {
        if (error4Google) {
            let message = error4Google?.message;
            toast.error(message, { id: 'error' });
        }
    }, [error4Google]);

    // control loading
    if (loading4Google) {
        return <Loading />
    }

    // control google sign in button
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    return (
        <section className='py-5 p-md-5'>
            <div className="container  my-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Login Now</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#198754", height: "2px" }} />
                </div>

                <div className="d-grid gap-2 w-75 mx-auto">
                    <Button onClick={handleGoogleSignIn} variant="outline-success" size="lg">
                        <FaGoogle /> Login with Google
                    </Button>
                </div>

                <ToastContainer />
            </div>
        </section>
    );
};

export default Login;