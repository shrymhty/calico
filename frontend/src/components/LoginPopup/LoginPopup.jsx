import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../utils/firebase';
import {setDoc, doc} from "firebase/firestore"
import { toast } from 'react-toastify';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

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
            }
            console.log("User is registered successfully");
            toast.success("Account Created!", {
                position: 'top-right'
            });
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
            toast.success("Login Successful!", {
                position: 'top-right'
            });
            setShowLogin(false); // Close popup after login
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-right'
            });
        }
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
                <button className='google-btn'>
                    <img src={assets.google_icon} alt="" />
                    Continue With Google    
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default LoginPopup