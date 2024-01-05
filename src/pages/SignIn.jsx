import React,{useState} from "react";
import "../App.css";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";

const auth= getAuth(app);

const SigninPage = () => {

    const [email,setEmail]= useState("");
    const [password,setpassword]= useState("");

    const signinUser = () =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => console.log("sign in success"))
        .catch((err) => console.log(err));
    };

  return (
    <div className="signin-page">
      <div className="container">
        <h1>Sign In Page</h1>
        <label>enter your email</label>
        <input  type="email" placeholder="enter your email" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        
        <label>enter your Password</label>
        <input type="password" placeholder="enter your password"
        onChange={(e)=>setpassword(e.target.value)}
        value={password}
        />
        <button onClick={signinUser}>Sign Me in</button>
      </div>
    </div>
  );
};
export default SigninPage;
