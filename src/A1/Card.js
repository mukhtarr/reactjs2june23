import React from 'react'

export default function Card(props) {
    return (
        <div>
            {
                props.moviedata.map((mov) => (
                    <>
                        <li>
                            <img src={mov.imgSrc} alt="" />, {mov.title}, {mov.text}
                            <button>watch now</button>
                        </li>
                        
                    </>

                ))

            }
        </div>
    )
}
