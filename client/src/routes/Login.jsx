import React, { useState } from 'react'
import '../assets/login.css'

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

                <div className="loginHeader">
                    <p>Login</p>
                    <label className='switch'>
                        <input type="checkbox" />
                        <span className='slider round' onClick={toggleForm}></span>
                    </label>
                    <p>Cadastro</p>
                </div>

                <div className='formContainer' style={{display: !logging ? 'none' : ''}}>
                    <form className="loginForm">
                        
                        <label htmlFor="">Usuário:</label>
                            <input type="text" />

                        <label htmlFor="">Senha:</label>
                            <input type="password" />

                        <div className="rememberMe">
                            <label className='rememberMeTxt'>Lembrar-me:</label>
                            <input type="checkbox" className='checkBtn' />
                        </div>

                        <button type='submit' className='loginBtn'>Entrar</button>
                    </form>
                </div>
                

                <div className='signupContainer' style={{display: logging ? 'none' : ''}}>
                    <form className="loginForm">
                        
                        <label htmlFor="">Usuário:</label>
                            <input type="text" />

                        <label htmlFor="">Senha:</label>
                            <input type="password" />

                        <label htmlFor="">Confirme sua senha:</label>
                            <input type="password" />

                        <button type='submit' className='loginBtn'>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
