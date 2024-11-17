import React, { useState } from 'react'
import axios from 'axios'

function SignUpForm({ logging }) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confPassword: '',
        isAdmin: false
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8080/Contacts/', formData,{
            
        })
        alert(response.data)
        setFormData({
            username: '',
            email: '',
            password: '',
            confPassword: '',
            isAdmin: false
        })
    }

    return (
        <div className='signupContainer' style={{display: logging ? 'none' : ''}}>
                <form className="loginForm" onSubmit={handleSubmit}>
                        
                    <label>Usuário:</label>
                        <input type="text" 
                        name='username'
                        value={formData.username}
                        onChange={handleChange}/>

                    <label>E-mail:</label>
                        <input type="text" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}/>

                    <label htmlFor="">Senha:</label>
                        <input type="password" 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}/>

                    <label htmlFor="">Confirme sua senha:</label>
                        <input type="password" 
                        name='confPassword'
                        value={formData.confPassword}
                        onChange={handleChange}/>
                    
                    <button type='submit' className='loginBtn'>Cadastrar</button>
                </form>
        </div>
    )
}

export default SignUpForm
