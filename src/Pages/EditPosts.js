import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPosts() {

    const [post, setPost] = useState()

    const navigate = useNavigate()

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`)
            .then((response) => setPost(response.data))
            .catch((error) => console.log(error))
    }, [])

    const updateRecord = () => {
        axios
            .put(`http://localhost:3001/posts/${id}`, post)
            .then((response) => {
                alert('Data Updated')
                navigate('/API/posts')
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className='container'>

            <div className="container row border">
                <label>Title</label>
                <input type="text" defaultValue={post?.title} className="form-control" onChange={(event) => setPost({ ...post, title: event.target.value })} />

                <label>Body</label>
                <input type="text" defaultValue={post?.body} className="form-control" onChange={(event) => setPost({ ...post, body: event.target.value })} />

                <button onClick={updateRecord}>Update</button>
            </div>
        </div>
    )
}
