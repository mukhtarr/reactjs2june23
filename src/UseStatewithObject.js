import React, { useState } from 'react'

export default function UseStatewithObject() {

    const [info, setInfo] = useState({ name: '', email: '', mobile: '', city: '' })

    const handlesubmit = (event) => {
        event.preventDefault()
        if (info.name === '' || info.email === '' || info.mobile === '' || info.city === '') {
            alert('please enter data')
        } else {
            alert('data submitted')
            console.log(info);

        }


    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <p>
                    Name:
                    <input type="text" className='form-control' onChange={(event) => setInfo({ ...info, name: event.target.value })} />
                </p>
                <p>
                    Email:
                    <input type="email" className='form-control' onChange={(event) => setInfo({ ...info, email: event.target.value })} />
                </p>
                <p>
                    Mobile:
                    <input type="number" className='form-control' onChange={(event) => setInfo({ ...info, mobile: event.target.value })} />
                </p>
                <p>
                    City:
                    <input type="text" className='form-control' onChange={(event) => setInfo({ ...info, city: event.target.value })} />
                </p>
                <button>Submit</button>
                <hr />
            </form>
        </div>
    )
}
