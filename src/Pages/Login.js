import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    }
    )
    const [users, setUsers] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:3001/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error))
    }, [])

    const loginProcess = () => {
        let foundUser = users.find((u) => u.email === loginDetails.username)
        if (foundUser) {
            if (foundUser.password === loginDetails.password) {
                if (foundUser.role === 'Admin') {
                    sessionStorage.setItem('role', 'Admin')
                    alert('welcome admin')
                    navigate('/welcome')
                }
                else {
                    sessionStorage.setItem('role', 'Guest')
                    alert('welcome Guest')
                    navigate('/welcome')
                }
            }
            else {
                alert('Wrong Password')
            }
        }
        else {
            alert('you are not registered')
        }
    }

    return (
        <div className='container mt-4'>
            <p>
                username :
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) =>
                        setLoginDetails({ ...loginDetails, username: event.target.value })
                    }
                />
            </p>

            <p>
                password :
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) =>
                        setLoginDetails({ ...loginDetails, password: event.target.value })
                    }
                />
            </p>

            <p>
                <button className='btn btn-primary' onClick={loginProcess}>Login</button>
            </p>

        </div>
    )
}
