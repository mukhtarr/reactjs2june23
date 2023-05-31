import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, buyCandle } from './cake/cakeAction'

function CakeContainer(props) {

    const [cake, setCake] = useState(0)
    const [candle, setCandle] = useState(0)

    return (
        <>
            <div className='container mt-4'>
                <h1>Number of cakes : {props.numberOfCakes} </h1> <hr />
                <input type="number" onChange={(event) => setCake(event.target.value)} /> <br /><br />
                <button onClick={() => props.buyCake(cake)} className='btn btn-success btn-lg'>Buy Cake</button>
            </div>
            <hr />
            <div className='container mt-4'>
                <h1>Number of candles : {props.numberOfCandles} </h1> <hr />
                <input type="number" onChange={(event) => setCandle(event.target.value)} /> <br /><br />
                <button onClick={() => props.buyCandle(candle)} className='btn btn-success btn-lg'>Buy Candles</button>
            </div>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes,
        numberOfCandles: state.numberOfCandles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (num1) => {
            dispatch(buyCake(num1))
        },
        buyCandle: (num2) => {
            dispatch(buyCandle(num2))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)
