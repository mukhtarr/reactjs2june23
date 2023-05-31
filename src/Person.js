import React from 'react'

export default function Person(props) {
    let {email, gender, fullname} = props.names
    return (
        <div>
            <p>
                email addres is : {email}
            </p>
            <p>
                gender is : {gender}
            </p>
            <p>
                Full name is {fullname}
            </p>
        </div>
    )
}
