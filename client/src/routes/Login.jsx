import React, { useState } from 'react'
import '../assets/login.css'
import SignUpForm from '../components/Login/SignUpForm'
import LoginForm from '../components/Login/LoginForm'
import LoginHeader from '../components/Login/LoginHeader'
import { useContext } from 'react'
import { ThemeContext } from '../components/Context/ThemeContext'

function Login() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [ logging, setLogging ] = useState(true)

    function toggleForm() {
        setLogging(!logging)
    }

    return (
        <div className="page">
            <div className={`transpArea ${theme}`}>
            <button className={`modeBtn ${theme}`} onClick={toggleTheme}></button>
            </div>
                
            <div className={`loginContainer ${theme}`}>
                <LoginHeader toggleForm={toggleForm} logging={logging} />
                <LoginForm logging={logging} />
                <SignUpForm logging={logging} />
            </div>
        </div>
    )
}

export default Login
