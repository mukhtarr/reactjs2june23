import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddPosts() {

    const navigate = useNavigate()

    // const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState(({ Id: '', useId: '', title: '', body: '' }))
    const [singlePost, setSinglePost] = useState()

    const createRecord = () => {
        axios.post('http://localhost:3001/posts', newRecord)
            .then((response) => {
                alert('Data Submitted')
                navigate('/API/posts')
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            {/* Add Post Form */}
            <div className="row mt-4">
                <div className="col-md-12">
                    {

                        <div className="container row border">
                            <label>Title</label>
                            <input type="text" defaultValue={singlePost?.title} className="form-control" onChange={(event) => setNewRecord({ ...newRecord, title: event.target.value })} />

                            <label>Body</label>
                            <input type="text" defaultValue={singlePost?.body} className="form-control" onChange={(event) => setNewRecord({ ...newRecord, body: event.target.value })} />

                            <button onClick={createRecord} className="btn btn-success mt-4">Create</button>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
