import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Oldest() {

    const [posts, setPosts] = useState();

    useEffect(() => {
        //logic to connect API --- read all records
        axios
            .get("http://localhost:3001/posts")
            .then((response) => {
                let postData = response.data
                postData = postData.filter(p => (p.oldest === true && p.latest === false))
                console.log(postData)
                setPosts(postData)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Oldest Posts</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered text-center text-secondary">
                                <thead>
                                    <tr key="">
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                        {/* <th colSpan={2}>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts ? posts.map((p, index) => (
                                            <tr key="">
                                                <td>{p.id}</td>
                                                <td>{p.title}</td>
                                                <td>{p.body}</td>
                                            </tr>
                                        )) : <tr key=""><td>Loading.....</td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
