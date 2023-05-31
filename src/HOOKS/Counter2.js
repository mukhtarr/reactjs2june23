import React from 'react'
import useCounter from './useCounter'

export default function Counter2() {

    const [count, Increment, Decrement] = useCounter(10)

    return (
        <div>
            {count} <hr />
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
