import React, { useState } from 'react'

export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onTextchange = (event) => {
        switch (event.target.id) {
            case 'username':
                setUsername(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break
            default:
        }
    }

    const onLoginclick = (event) => {
        event.preventDefault()
        console.log(username, password);
        props.updateUserInfo({username, password})
    }

    return (
        <div>
            <h2>Login Component</h2>
            <form onSubmit={onLoginclick}>
                <label>username</label>
                <input type="text" className='form-control' id='username' value={username} onChange={onTextchange} />

                <label>password</label>
                <input type="password" className='form-control' id='password' value={password} onChange={onTextchange} />

                <button className='btn btn-danger'>Login</button>
            </form>
        </div>
    )
}
