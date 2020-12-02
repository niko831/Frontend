import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import UndoIcon from '@material-ui/icons/Undo';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserPostWrapper } from '../../muiThemes';
import { deleteData } from '../redux/actions';
import PostForm from './PostForm';

const Post = (props)=>{
    // Determines if the post is being edited.
    const [editing, setEdit] = useState(false)
    const {post} = props

    const deletePost = (e)=>{
        e.preventDefault()
        props.deleteData(post.id)
    }

    return(
        <>
            <UserPostWrapper>
            <h3 style={{width: "95%"}} >
                {/* If the post is not being edited then the post text will be displayed here.
                 If it is then a text box will be displayed with the post text inside it */}
                {
                    !editing 
                    ? `${post.post}` 
                    : (<PostForm post={post} editing={editing} setEdit={setEdit} />) 
                }
            </h3>

            <div style={{display: "flex", flexFlow: "column wrap"}} >
                   {/* Determines if the post is being edited. Text changes based on editing state. */}
            <IconButton onClick={()=>{
                setEdit(!editing)
                }} >
                {!editing ? (<EditIcon/>) : (<UndoIcon/>)}
            </IconButton>

            <IconButton onClick={(e)=>deletePost(e)} >
                <DeleteIcon/>
            </IconButton>
            </div>
        </UserPostWrapper>
        </>
    )
}

export default connect(null, {deleteData})(Post)