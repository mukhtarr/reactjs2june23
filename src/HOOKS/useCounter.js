import React, { useState } from 'react'

export default function useCounter(initialvalue = 0) {

    const [count, setCount] = useState(initialvalue)

    const increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    return [count, increment, Decrement]

}
