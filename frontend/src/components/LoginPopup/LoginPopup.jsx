import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from '../utils/firebase';
import {setDoc, doc} from "firebase/firestore"
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const {url, setToken} = useContext(StoreContext);

    useEffect(() => {
        // Disable scroll
        document.body.style.overflow = 'hidden';
        
        return () => {
            // Re-enable scroll when component unmounts
            document.body.style.overflow = 'auto';
        };
    }, []);


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({
            ...data,
            [name]:value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: data.name,
                    
                })

                const response = await user.getIdToken();
                setToken(response);

                await fetch(`${url}/api/user/init`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${response}`
                    }
                });
            }
            console.log("User is registered successfully");
            setShowLogin(false);
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-right'
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");

            const user = auth.currentUser;
            if (user) {
                const response = await user.getIdToken();
                setToken(response);

                setShowLogin(false); // Close popup after login

                await fetch(`${url}/api/user/init`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${response}`
                    }
                });
            }
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-right'
            });
        }
    };

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: user.displayName,
                });

                const response = await user.getIdToken();
                setToken(response);

                console.log(response);

                await fetch(`${url}/api/user/init`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${response}`
                    }
                });
                setShowLogin(false);
            }
        } catch (error) {
            console.error("Google sign-in error:", error);
        }

        // signInWithPopup(auth, provider).then(async (result) => {
        //     const user = result.user;

        //     if (user) {
        //         await setDoc(doc(db, "Users", user.uid), {
        //             email: user.email,
        //             name: user.displayName, // Note: Use displayName, not name
        //         });
        //         setShowLogin(false);
        //     }
        // }).catch((error) => {
        //     console.error("Google sign-in error:", error);
        // });
    };

  return (
    <div className="login-popup">
        <form className='login-popup-container' onSubmit={currState === 'Login' ? handleLogin : handleRegister}>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <FontAwesomeIcon icon={faXmark} className="close-login" onClick={() => setShowLogin(false)}/>
            </div>
            <div className="login-popup-intro-text">
                {currState === 'Login' 
                ? <p>Welcome Back! Please enter your details below to continue.</p> 
                : <p>Join us! Create your account to get started.</p>}
            </div>
            
            <div className="login-popup-inputs">
                {currState==='Login'
                ? <></>
                :<input name="name" onChange={onChangeHandler} type="text" value={data.name} placeholder='Enter your name' required />}
                <input name='email' onChange={onChangeHandler} type="email" value={data.email} placeholder='Enter your email' required />
                <input name='password' onChange={onChangeHandler} type="password" value={data.password} placeholder='Password' required />
            </div>
            <button type='submit'>{currState === "Sign Up"?"Create Account":"Login"}</button>
            {currState === 'Login'
            ? <p className='forgot-pass'>Forgot Password?</p>
            : <></>}  
            {currState === 'Login'
            ? <p>Don't have an account? <span className='sign-up-link' onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
            : <p>Already have an account? <span className='sign-up-link' onClick={() => setCurrState("Login")}>Login</span></p>}
            <div className='google-div'>
                <div className="divider">
                    <div className="line"></div>
                    <p>OR</p>
                    <div className="line"></div>
                </div>
                <button className='google-btn' onClick={(e) => handleGoogleLogin(e)}>
                    <img src={assets.google_icon} alt="" />
                    Continue With Google    
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default LoginPopup