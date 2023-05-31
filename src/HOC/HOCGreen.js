import React from 'react'

export default function HOCGreen(props) {
    return (
        <h3 style={{ backgroundColor: "green", width: 150, textAlign: "center" }}>
            Green
            <props.cmp />
        </h3>
    );
}
