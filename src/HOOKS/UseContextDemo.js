import React, { createContext } from 'react'
import ChildA from './ChildA'

const data = createContext()
const data1 = createContext()

export default function UseContextDemo() {

    const name = 'ravi'
    const age = 35

    return (
        <div>
            <data.Provider value={name}>
                <data1.Provider value={age}>
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export { data, data1 }
