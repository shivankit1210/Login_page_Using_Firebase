import React from "react";
import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import "../App.css";

const  auth = getAuth()

const SignupPage =()=>{

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const createUser =()=>{
 createUserWithEmailAndPassword(auth,email,password).then(value=> 
    alert("success"));
  };

    return(
        <div className="signup-page">
            <div className="container">
            <h1>Sign Up</h1>
            <label >Email</label>
            <input 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            type="email" required placeholder="Enter your Email address"/>
            <label>Password</label>
            <input 
             onChange={(e)=> setPassword(e.target.value)}
             value={password}
            type="password" required placeholder="Enter your  unique password" />
            <button onClick={createUser} >Sign Up</button>
            </div>
            
        </div>
    )
}

export default SignupPage;