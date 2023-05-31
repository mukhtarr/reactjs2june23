import React from 'react'

export default function HOCBlue(props) {
    return (
        <h3 style={{ backgroundColor: "blue", width: 150, textAlign: "center" }}>
            Blue
            <props.cmp />
        </h3>
    );
}
