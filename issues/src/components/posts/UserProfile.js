import React, { useState } from 'react';
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';
import Post from './Post';
import PostForm from './PostForm';
import { PostsContainer } from '../../muiThemes';

const UserProfile = (props)=>{
    // Determines if the form post is active
    const [creatingPost, setCreatingPost] = useState(false)

    // Used to re-render the data when a new item is created, edited, or deleted
    // useEffect(()=>{
    //     props.fetchData()
    //     setCreatingPost(false)
    // }, [props.allPosts.length])
    // console.log(props.allPosts)

    return(
        <PostsContainer>
            <h2>User {props.userId}'s Profile Page</h2>

            <h3>My Posts</h3>

            {/* Toggled form button. Button text changes depending on whether the form is "active" */}
            <button onClick={()=>setCreatingPost(!creatingPost)} >
                {!creatingPost ? "Post an Issue" : "Cancel"}
            </button>

            {/* Toggled form */}
            <div style={{
                    display:`${!creatingPost ? "none" : "block" }`,
                    borderTop:"1px solid black",
                    borderBottom:"1px solid black",
                    margin:"2% 0", padding: "1%"
            }} >
                <PostForm/>
            </div>

            {/* All posts that match the user's ID */}
            {
                props.allPosts.length > 0 ? 
                    props.allPosts.filter(post=>{
                        return post.user_id === props.userId
                })
                    .map(post=>(
                        <Post key={post.id} post={post} />
                ))
            : null }
        </PostsContainer>
    )
}

const mapStateToProps = state =>{
    return{
        allPosts: state.posts,
        userId: state.userId
    }
}

export default connect(mapStateToProps, {fetchData})(UserProfile)