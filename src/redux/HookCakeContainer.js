import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyCandle } from './cake/cakeAction'

export default function HookCakeContainer() {

    const [cake, setCake] = useState(0)
    const [candle, setCandle] = useState(0)

    const NumOfCake = useSelector(state => state.numberOfCakes)
    const NumOfCandle = useSelector(state => state.numberOfCandles)

    const dispatch = useDispatch()

    return (
        <div>
            <div className='container mt-4'>
                <h2>Number of Cakes are : {NumOfCake}</h2>
                <input type="number" onChange={(event) => setCake(event.target.value)} /> <br /><br />
                <button onClick={() => dispatch(buyCake(cake))}>Buy Cake</button>
            </div>

            <div className='container mt-4'>
                <h2>Number of Candles are : {NumOfCandle}</h2>
                <input type="number" onChange={(event) => setCandle(event.target.value)} /> <br /><br />
                <button onClick={() => dispatch(buyCandle(candle))}>Buy Candle</button>
            </div>

        </div>
    )
}
