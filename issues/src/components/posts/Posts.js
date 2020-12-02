import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PostsContainer } from '../../muiThemes';
import { fetchData } from '../redux/actions';
import Post from './Post';
import PostForm from './PostForm';

const Posts = (props) => {
    // Determines if the form post is active
    const [creatingPost, setCreatingPost] = useState(false)

    // Used to re-render the data when a new item is created, edited, or deleted
    useEffect(()=>{
        props.fetchData() 
        setCreatingPost(false)
    }, [props.posts.length])
    console.log(props)

    return(
        <PostsContainer>
            <h1>Community Posts</h1>

            {/* Toggled form. Visibilty is controlled by state and button click */}
            <div style={{
                    display:`${!creatingPost ? "none" : "block" }`,
                    borderTop:"3px solid black",
                    borderBottom:"3px solid black",
                    margin:"2% 0",
                    padding: "1%",
                    width: "86%",
                    backgroundColor: "white",
                }} >
                <PostForm setCreatingPost={setCreatingPost} />
            </div>

            {/* All posts are shown here. If no posts are present, then the first condition renders. */}
            {
                !props.posts.length
                ? (
                    <div>
                        <h2>Looks like no has any issues to report...yet. Lets change that</h2>

                    {/* The button determines if the form is active and visible. It also determines the text inside the button */}
                        <button onClick={()=>setCreatingPost(!creatingPost)} >
                            {!creatingPost ? "Post an Issue" : "Cancel"}
                        </button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={()=>setCreatingPost(!creatingPost)} >
                            {!creatingPost ? "Post an Issue" : "Cancel"}
                        </button>

                        {props.posts?.map((post, index) =>(
                        <Post key={index} post={post} />
                    ))}
                    </div>
                )
            }
        </PostsContainer>
    )
}

const mapStateToProps = state =>{
    return{
        posts: state.posts,
    }
}

export default connect(mapStateToProps, {fetchData})(Posts)