import React, { useMemo, useState } from 'react'

export default function UseMemoDemo() {

    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    const multiply = useMemo(function multiply() {
        console.log('**********');
        return add * 10
    }, [add])

    return (
        <div>
            <h1>UseMemo Hook</h1>
            {
                multiply
            }
            <hr />
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span> <hr />
            <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
            <span>{minus}</span>
        </div>
    )
}
