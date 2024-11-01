import React from 'react'

function SignUpForm({ logging }) {


    return (
        <div className='signupContainer' style={{display: logging ? 'none' : ''}}>
                    <form className="loginForm">
                        
                        <label htmlFor="">Usuário:</label>
                            <input type="text" />

                        <label htmlFor="">Senha:</label>
                            <input type="password" />

                        <label htmlFor="">Confirme sua senha:</label>
                            <input type="password" />
                    </form>
                    <button type='submit' className='loginBtn'>Entrar</button>
                </div>
    )
}

export default SignUpForm
