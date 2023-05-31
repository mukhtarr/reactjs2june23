import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Menu() {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);

    const [role, setRole] = useState()

    useEffect(() => {
        let user_role = sessionStorage.getItem('role')
        setRole(user_role)
    }, [location])

    const logoutProcess = () => {
        sessionStorage.removeItem('role')
        alert('Logout Successfully')
        navigate('/login')
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3" to='/about'> <strong>J D Sports</strong> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                role ? (role === 'Admin') ? (
                                    <>
                                        <Link className="nav-link fs-4" to='/welcome' >Welcome</Link>
                                        <Link className="nav-link fs-4" to='/about' >About</Link>
                                        <Link className="nav-link fs-4" to='/API/posts' >Posts</Link>
                                        <Link className="nav-link fs-4" to='/addposts' >AddPosts</Link>
                                        <button onClick={logoutProcess}>Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link className="nav-link fs-4" to='/welcome' >Welcome</Link>
                                        <Link className="nav-link fs-4" to='/about' >About</Link>
                                        <Link className="nav-link fs-4" to='/API/posts' >Posts</Link>
                                        <button onClick={logoutProcess}>Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link className="nav-link fs-4" to='/login' >Login</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
