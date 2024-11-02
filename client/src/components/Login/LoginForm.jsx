import React from 'react'

function LoginForm({ logging }) {
    return (
        <div className='formContainer' style={{display: !logging ? 'none' : ''}}>
                    <form className="loginForm">
                        
                        <label htmlFor="username">Usuário:</label>
                            <input type="text" name="username"/>

                        <label htmlFor="password">Senha:</label>
                            <input type="password" name="password"/>

                        <div className="rememberMe">
                            <label className='rememberMeTxt'>Lembrar-me:</label>
                            <input type="checkbox" className='checkBtn' />
                        </div>
                    </form>
                    <button type='submit' className='loginBtn'>Entrar</button>
                </div>
    )
}

export default LoginForm
