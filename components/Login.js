import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../Login.css'
import { auth } from "../firebase";

function Login() {
    const history = useHistory();                        // history of browser
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
        // firebase login
    }

    const register = event => {
        event.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {    // This literally goes and creates a user with email 
                                                                                 // and password, then if everything goes right it
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))                                  // comes back with an auth object
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />

                    <button className="login_signin_button" type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>By continuing, you agree to Fake Amazon's Conditions of Use and Privacy Notice, our Cookies Notice
                   and our Interest-Based Ads
                </p>

                <button className="login_register_button" onClick={register}>Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;