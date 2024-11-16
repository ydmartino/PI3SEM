import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function LoginForm({ logging }) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    
    const navigate = useNavigate()

    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //await axios.post('http://localhost:8080/Login', formData)
        return navigate('/chat')
    }

    return (
        <div className='formContainer' style={{display: !logging ? 'none' : ''}}>
                    <form className={`loginForm ${theme}`} onSubmit={handleSubmit}>
                        
                        <label htmlFor="username">Usuário:</label>
                            <input type="text" name="username" required/>

                        <label htmlFor="password">Senha:</label>
                            <input type="password" name="password" required/>

                        <div className="rememberMe">
                            <label className='rememberMeTxt'>Lembrar-me:</label>
                            <input type="checkbox" className='checkBtn' />
                        </div>
                        <button type='submit' className='loginBtn'>Entrar</button>
                    </form>
                </div>
    )
}

export default LoginForm
