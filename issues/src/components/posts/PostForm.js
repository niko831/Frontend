import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData, editData, fetchData } from '../redux/actions';

const PostForm = (props)=>{
    // If a post is being edited then that particular post's information will be populate the form, otherwise, the form wil be empty.  
    const [post, setPost] = useState( props.editing ? props.post?.post : "")
    
    console.log(post)
    const submitPost = (e) => {
        e.preventDefault()
        
        // Used to send the data to the server as an object
        const newPost = {post: post}
        
        // If a post is not being edited, then a new post will be created instead.
        if(!props.editing){
            props.addData(newPost, props.id)
            props.fetchData()
            setPost("")
        }
        else{
            props.editData(newPost, props.post.id)
            props.setEdit(false)
            props.fetchData()
        }
    }

    // Used to handle typing into the text field
    const handleChange = (e) => {
        setPost(e.target.value )
    }

    return(
        <div>
            <form onSubmit={submitPost} >

                {/* <input type="text" name="post" value={ post } onChange={(e)=>handleChange(e)} /> */}
                <TextField name="post" fullWidth variant="outlined" rowsMax={3} value={ post } onChange={(e)=>handleChange(e)} />

                <input type="submit" value={!props.editing ? "Post Issue" : "Confirm Edit"} />
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
  return{
    id: state.userId,
  }
}

export default connect(mapStateToProps, {addData, editData, fetchData})(PostForm)