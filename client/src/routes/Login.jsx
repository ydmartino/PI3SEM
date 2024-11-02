import React, { useState } from 'react'
import '../assets/login.css'
import SignUpForm from '../components/Login/SignUpForm'
import LoginForm from '../components/Login/LoginForm'
import LoginHeader from '../components/Login/LoginHeader'

function Login() {
    const [ logging, setLogging ] = useState(true)
    const [ dark, setDark ] = useState(false)

    function toggleForm() {
        setLogging(!logging)
    }

    function toggleDark() {
        setDark(!dark)
        const logoArea = document.getElementsByClassName('transpArea')[0]
        const loginArea = document.getElementsByClassName('loginContainer')[0]
        const loginBtn = document.getElementsByClassName('loginBtn')[0]
        const signUpBtn = document.getElementsByClassName('loginBtn')[1]
        const modeBtn = document.getElementsByClassName('modeBtn')[0]

        if(!dark){
            logoArea.classList.add('dark')
            loginArea.classList.add('dark')
            loginBtn.classList.add('dark')
            signUpBtn.classList.add('dark')
            modeBtn.classList.add('dark')
        } else {
            logoArea.classList.remove('dark')
            loginArea.classList.remove('dark')
            loginBtn.classList.remove('dark')
            signUpBtn.classList.remove('dark')
            modeBtn.classList.remove('dark')
        }
    }

    return (
        <div className="page">
            <div className="transpArea">
            <button className='modeBtn' onClick={toggleDark}></button>
            </div>

            <div className="loginContainer">
                <LoginHeader toggleForm={toggleForm} toggleDark={toggleDark} />
                <LoginForm logging={logging} />
                <SignUpForm logging={logging} />
            </div>
        </div>
    )
}

export default Login
