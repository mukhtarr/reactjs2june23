import React, { useEffect, useRef } from 'react'

export default function UseRefDemo() {

    const inputRef = useRef()

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus()
    }, [])

    return (
        <div className="container mt-4">
            <input
                type="text"
                className="form-control"
                placeholder="type something"
                ref={inputRef}
            />

        </div>

    )
}
