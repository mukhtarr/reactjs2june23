import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {

    const [name, setName] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect called');
    }, [count])

    return (
        <div>
            <input type="text" onChange={event => setName(event.target.value)} />
            <button onClick={() => setCount(count => count + 1)}>Click {count} times</button>

            <h1>your name is  <mark>{name}</mark> and you clicked {count} times</h1>

        </div>
    )
}
