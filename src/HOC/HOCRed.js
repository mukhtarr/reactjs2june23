import React from 'react'

export default function HOCRed(props) {
    return (
        <h3 style={{ backgroundColor: "red", width: 150, textAlign: "center" }}>
            Red
            <props.cmp />
        </h3>
    );
}
