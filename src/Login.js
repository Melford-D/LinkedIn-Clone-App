import React, { useState } from 'react'
import './Login.css'
import Linkedin from './img/linkedin-2.svg' 
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 displayName: userAuth.user.displayName,
                 photoUrl: userAuth.user.photoURL
            }));
        }).catch(error => alert(error));
    };
    const register = () => {
        if (!name){
            return alert("Please enter a full name.");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user.updateProfile({
              displayName: name,
              photoUrl: profilePic,
          }).then(() => {
              dispatch(login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic
              }));
          })
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src={Linkedin} alt="LinkedIn-Icon"/>

            <form>
                <input 
                placeholder="Full name required for registration" 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <input 
                placeholder="Profile pic URL (optional)" 
                type="text"
                value={profilePic}
                onChange={(e)=> setProfilePic(e.target.value)}
                />
                <input 
                placeholder="Email" 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input 
                placeholder="Password" 
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {''}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
