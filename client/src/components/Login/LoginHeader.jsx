import React from 'react'

function LoginHeader({ toggleForm, toggleDark, logging }) {

    return (
        <>
            <div className="loginHeader">
                <label className='switch'>
                    <input type="checkbox" />
                    <span className='slider round' onClick={toggleForm}></span>
                </label>
            </div>
            <p className='headerTitle'>{logging ? 'Login' : 'Cadastro'}</p>
        </>
        
    )
}

export default LoginHeader
