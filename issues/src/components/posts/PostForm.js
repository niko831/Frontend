import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData, editData } from '../redux/actions';

const PostForm = (props)=>{
    const [post, setPost] = useState( props.editing ? props.post?.post : "")
    
    console.log(props.post?.id)
    console.log(props.post?.post)
    const submitPost = (e) => {
        e.preventDefault()
        
        // debugger
        if(!props.editing){
            // console.log(props.post)
            props.addData(post)
            console.log("Post to add =======>",post)
        }
        else{
            console.log("Edit post data",post)
            console.log("Edit props.post before edit",props.post)
            props.editData(props.post.id, post)
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setPost(e.target.value )
    }

    return(
        <div>
            <form onSubmit={(e)=> submitPost(e)} >

                <input type="text" name="issue" value={ post } onChange={(e)=>handleChange(e)} />

                <input type="submit" value={!props.editing ? "Post Issue" : "Edit Issue"} />
            </form>
        </div>
    )
}

// const mapStateToProps = (state)=>{
//     return {
//         editing: state.editing,
//     }
// }

export default connect(null, {addData, editData})(PostForm)