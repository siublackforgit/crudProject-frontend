import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import {Button,Form} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

const Post = () => {
    const [posts, setPost] = useState([{
        title: '',
        content: ''
    }])

  const [show, setShow] = useState(false);
  const [updatedPost,setUpdatedPost] =useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://crudproject-api.onrender.com/post").then(res => {
            console.log(res.body.title);
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setPost(jsonRes))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleChange (e){
        const { name, value} = e.target;

        setUpdatedPost(Prev=>{
            return{
                ...Prev,
                [name]:value
            }
        })
    }

    function deletePost(id) {
        axios.delete(`https://crudproject-api.onrender.com/delete/${id}`)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })


        window.location.reload()
    }

    function updatePost(post){
        setUpdatedPost(post);
        handleShow();
    }

    const saveUpdatedPost = ()=>{
        axios.put(`https://crudproject-api.onrender.com/update/${updatedPost._id}`,updatedPost)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})

        handleClose();
        window.location.reload();
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Post Page</h1>
            <button className='btn btn-secondary btn-lg' style={{width:"100%"}} onClick={()=>{navigate(-1)}}>Back</button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form> 
                <Form.Group>
                    <Form.Control  
                    name="title"
                    value={updatedPost.title? updatePost.title:"" }
                    onChange={handleChange}
                    placeholder="New Post Title"/>
                    <Form.Control  
                    name="content"
                    value={updatedPost.content?updatePost.content:""}
                    onChange={handleChange}
                    placeholder="New Post content"/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{saveUpdatedPost()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {posts.map((post, index) => {
                return (
                    <div key={index} style={{ border: "solid grey 0.1px", marginBottom: "1rem" }} >
                        <h2 className='text-center'>{index + 1}</h2>
                        <h3 className='text-center'>{post.title}</h3>
                        <p className='text-center'>{post.content}</p>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <button className='btn btn-primary btn-lg'onClick={()=>{updatePost(post)}}>UPDATE</button>
                            <button className='btn btn-success btn-lg' onClick={() => { deletePost(post._id) }}>DELETE</button>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Post