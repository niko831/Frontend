import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteData } from '../redux/actions';
import PostForm from './PostForm';

const Post = (props)=>{
    // Determines if the post is being edited.
    const [editing, setEdit] = useState(false)
    const {post} = props

    // console.log(post)
    const deletePost = (e)=>{
        e.preventDefault()
        props.deleteData(post.id)
    }

    return(
        <div>
            <h2>
                {/* If the post is not being edited then the post text will be displayed here.
                 If it is then a text box will be displayed with the post text inside it */}
                {
                    !editing 
                    ? `${post.post}` 
                    : (<PostForm post={post} editing={editing} />) 
                }
            </h2>

                {/* Determines if the post is being edited. Text changes based on editing state. */}
            <button onClick={()=>setEdit(!editing)} >
                {!editing ? "Edit Post" : "Cancel Edit"}
            </button>

            <button onClick={(e)=>deletePost(e)} >
                Delete Post
            </button>
        </div>
    )
}

export default connect(null, {deleteData})(Post)