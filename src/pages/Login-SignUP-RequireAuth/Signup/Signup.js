import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa"; import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Signup = () => {
    const navigate = useNavigate()

    // get element login with google from hook
    const [signInWithGoogle, user4Google, loading4Google, error4Google] = useSignInWithGoogle(auth);

    // get element from firebase react hook    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // get element from firebase react hook for update profile
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error4UpdateProfile] = useUpdateProfile(auth);

    // control navigation
    useEffect(() => {
        if (user || user4Google) {
            toast.success('Signup Successful & Profile Updated', { id: 'signup' });
            navigate('/')
        }
    }, [user, user4Google]);

    // control error
    useEffect(() => {
        if (error || error4Google) {
            const message = error || error4Google;
            toast.error(message, { id: 'error' });
        }
    }, [error, error4Google]);

    // control loading
    if (loading || loading4Google) {
        return <Loading />
    }


    // control form after submit button pressed
    const handleSubmit = async (e) => {
        e.preventDefault();

        let name = e.target.elements.name?.value;
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        if (name && email && password && password.length >= 6) {
            await createUserWithEmailAndPassword(email, password)
            setDisplayName(name);
            await updateProfile({ displayName: name });
        } else {
            toast.error('Password must be at least 6 characters long');
            return;
        }


    }

    // control google sign in button
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }


    return (
        <section className='py-5 p-md-5'>
            <div className="container  my-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Register Now</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <Form onSubmit={handleSubmit} className='my-4 w-75 mx-auto'>
                    <FloatingLabel
                        controlId="floatingInput1"
                        label="User Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="User Name" name='name' />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput2"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" name='email' required />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </FloatingLabel>


                    <div className="d-grid gap-2">
                        <Button type='submit' variant="danger" size="lg">
                            Register
                        </Button>
                    </div>

                    <div className="my-3 text-center">
                        <p>Already Have Account? <Link className='text-decoration-none' to='/login'>Login now</Link></p>
                    </div>
                </Form>

                <div className='d-flex justify-content-center align-items-center my-4'>
                    <hr className="w-25" />
                    <span className='mx-2'>or</span>
                    <hr className="w-25" />
                </div>

                <div className="d-grid gap-2 w-75 mx-auto">
                    <Button variant="outline-primary" size="lg">
                        <FaFacebook /> Login with Facebook
                    </Button>
                    <Button onClick={handleGoogleSignIn} variant="outline-secondary" size="lg">
                        <FaGoogle /> Login with Google
                    </Button>
                </div>

                <ToastContainer />
            </div>
        </section>
    );
};

export default Signup;