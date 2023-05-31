import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h2>{counter}</h2>
            <button className="btn btn-sm btn-dark" onClick={() => setCounter(counter + 2)}> Update</button>
        </>
    );
}
