import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteData } from '../redux/actions';
import PostForm from './PostForm';

const Post = (props)=>{
    const [editing, setEdit] = useState(false)
    const {post} = props

    // console.log(post)
    const deletePost = (e)=>{
        e.preventDefault()
        props.deleteData(post.id)
    }

    return(
        <div>
            <h2>{!editing ? `${post.post}` : (<PostForm post={post} editing={editing} />) }</h2>

            <button onClick={()=>setEdit(!editing)} >{!editing ? "Edit Post" : "Cancel Edit"}</button>

            <button onClick={(e)=>deletePost(e)} >Delete Post</button>
        </div>
    )
}

export default connect(null, {deleteData})(Post)