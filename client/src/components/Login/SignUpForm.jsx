import React, { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function SignUpForm({ logging }) {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const [formData, setFormData] = useState({
        name: '',
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
        const response = await axios.post('http://localhost:8080/Contacts', formData)
        console.log(response)
        if(response.status == 201){
            alert(response.status + ": Criado com sucesso")
            setFormData({
                name: '',
                email: '',
                password: '',
                confPassword: '',
                isAdmin: false
            })
        }
        else {
            alert("Erro inesperado: " + response.status)
        }
    }

    return (
        <div className='signupContainer' style={{display: logging ? 'none' : ''}}>
                <form className={`loginForm ${theme}`} onSubmit={handleSubmit}>
                        
                    <label>Usuário:</label>
                        <input type="text" 
                        name='name'
                        value={formData.name}
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
