
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Latest from '../Pages/Latest'
import Oldest from '../Pages/Oldest'


export default function Posts() {



    return (
        <>

            <div className='container mt-4'>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="latest">LATEST</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="oldest">OLDEST</Link>
                    </li>
                </ul>

                {/* Routing Configuration */}
                <Routes>
                    <Route path='/latest' element={<Latest />} />
                    <Route path='/oldest' element={<Oldest />} />
                </Routes>

            </div>


        </>
    )
}
