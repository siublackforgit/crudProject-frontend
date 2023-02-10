import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState(
        {
            title:'',
            content:''
        })

    function handleChange (e){
        const { name, value} = e.target;

        setPost(Prev=>{
            return{
                ...Prev,
                [name]:value
            }
        })
    }

    function handleSubmit(e){
        console.log(post)
        e.preventDefault();
        const newPost = {
            title: post.title,
            content: post.content
        }
        axios.post("https://crudproject-api.onrender.com/create",newPost)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })

        

    }
    return (

        <div className='form-group container text-center'>
            <h1>CreatePost</h1>
            <input placeholder="Title" style={{ boxSizing: "border-box", padding: "10px" }} type="text" name="title" className='form-control  input-lg container' value={post.title} onChange={handleChange} required/>
            <input type="text" name="content" className='container form-control' placeholder='description' value={post.content} onChange={handleChange} required />
            <button className='btn btn-primary' style={{ width: "100%" }} onClick={handleSubmit}>Create Post</button>
            <button className='btn btn-success'style={{width:"100%"}} onClick={()=>{navigate('/post')}}>Go To Post Page</button>
            <button className='btn btn-secondary' style={{ width: "100%" }} onClick={() => { navigate(-1) }}>Back</button>
        </div>
    )
}

export default CreatePost