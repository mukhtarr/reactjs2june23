import React from 'react'
// import PropTypes from "prop-types";

export default function DefComp(props) {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p>EyeColor: {props.eyeColor}</p>
            <p>Age : {props.age} </p>

        </div>
    )
}

DefComp.defaultProps = {
    name: 'mukhtar',
    eyeColor: 'seagreen',
    age: 40
}