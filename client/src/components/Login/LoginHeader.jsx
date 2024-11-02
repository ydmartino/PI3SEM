import React from 'react'

function LoginHeader({ toggleForm, toggleDark }) {

    return (
        <div className="loginHeader">
                    <p>Login</p>
                    <label className='switch'>
                        <input type="checkbox" />
                        <span className='slider round' onClick={toggleForm}></span>
                    </label>
                    <p>Cadastro</p>
                </div>
    )
}

export default LoginHeader
