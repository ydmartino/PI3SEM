import React, { useState } from 'react'
import '../assets/login.css'
import SignUpForm from '../components/Login/SignUpForm'
import LoginForm from '../components/Login/LoginForm'
import LoginHeader from '../components/Login/LoginHeader'

function Login() {
    const [ logging, setLogging ] = useState(true)

    function toggleForm() {
        setLogging(!logging)
    }

    return (
        <div className="page">
            <div className="transpArea">
                
            </div>

            <div className="loginContainer">
                <LoginHeader toggleForm={toggleForm} />
                <LoginForm logging={logging} />
                <SignUpForm logging={logging} />
            </div>
        </div>
    )
}

export default Login
