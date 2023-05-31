import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

    const [name, setName] = useState('mukhtar')
    const [age, setAge] = useState(35)

    const refElement = useRef()
    console.log(refElement);

    const Reset = () => {
        setName('')
        setAge('')
        refElement.current.focus()
    }

    const handleColor = () => {
        refElement.current.style.color = 'red'
    }

    const handleValue = () => {
        refElement.current.value = 'ravi'
    }

    return (
        <div>
            <h1>useRef hook</h1>
            <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /> <br/>
            <button onClick={Reset}>Reset</button><br />
            <button onClick={handleColor}>Change Color</button> <br />
            <button onClick={handleValue}>Change Value</button>
        </div>
    )
}
