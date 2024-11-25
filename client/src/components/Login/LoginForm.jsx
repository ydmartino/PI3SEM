import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { jwtDecode } from 'jwt-decode'

function LoginForm({ logging }) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    
    const navigate = useNavigate()

    const [ formData, setFormData ] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(`http://localhost:8080/Contacts/Login`, formData)
        console.log(response)
        if(response.status == 200){
            const token = response.data.token
            localStorage.setItem('authToken', token)

            const decoded = jwtDecode(token)
            localStorage.setItem('userId', decoded.sub)
            
            alert(response.data.message)
            return navigate('/chat')
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div className='formContainer' style={{display: !logging ? 'none' : ''}}>
                    <form className={`loginForm ${theme}`} onSubmit={handleSubmit}>
                        
                        <label htmlFor="name">Usuário:</label>
                            <input type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required/>

                        <label htmlFor="password">Senha:</label>
                            <input type="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            required/>

                        {/*<div className="rememberMe">
                            <label className='rememberMeTxt'>Lembrar-me:</label>
                            <input type="checkbox" className='checkBtn' />
                        </div>*/}

                        <button type='submit' className='loginBtn'>Entrar</button>
                    </form>
                </div>
    )
}

export default LoginForm
