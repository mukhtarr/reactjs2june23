import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        default:
            return state
    }
}

export default function Counter() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            {count}
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('Decrement')} >Decrement</button>
        </div>
    )
}
