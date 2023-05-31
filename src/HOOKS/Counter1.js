import React from 'react'
import useCounter from './useCounter'

export default function Counter1() {

    const [count, Increment, Decrement] = useCounter(20)

    return (
        <div>
            {count} <hr />
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
