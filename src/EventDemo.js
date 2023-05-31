import React from 'react'

export default function EventDemo() {
    const handleclick = () => {
        console.log('you clicked');
        alert('you cliked button ......')
    }
    return (
        <div>
            <button onClick={handleclick}>click</button>
        </div>
    )
}
