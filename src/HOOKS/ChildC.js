import React, { useContext } from 'react'
import { data, data1 } from './UseContextDemo'

export default function ChildC() {

    const myname = useContext(data)
    const myage = useContext(data1)

    return (
        <div>
            <h1>
                My name is {myname} and age is {myage}
            </h1>
        </div>
    )
}
