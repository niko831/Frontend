import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import Post from './Post';
import PostForm from './PostForm';

const Posts = (props) => {
    // Determines if the form post is active
    const [creatingPost, setCreactingPost] = useState(false)
    console.log(props.posts)

    // Used to re-render the data when a new item is created, edited, or deleted
    useEffect(()=>{
        props.fetchData()
    }, [props.posts.length])


    return(
        <div>
            <h1>Community Posts</h1>

            {/* Toggled form. Visibilty is controlled by state and button click */}
            <div style={{
                    display:`${!creatingPost ? "none" : "block" }`,
                    borderTop:"1px solid black",
                    borderBottom:"1px solid black",
                    margin:"2% 0", padding: "1%"
                }} >
                <PostForm/>
            </div>

            {/* All posts are shown here. If no posts are present, then the first condition renders. */}
            {
                !props.posts
                ? (
                    <div>
                        <h2>Looks like no has any issues to report...yet. Lets change that</h2>

                    {/* The button determines if the form is active and visible. It also determines the text inside the button */}
                        <button onClick={()=>setCreactingPost(!creatingPost)} >
                            {!creatingPost ? "Post an Issue" : "Cancel"}
                        </button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={()=>setCreactingPost(!creatingPost)} >
                            {!creatingPost ? "Post an Issue" : "Cancel"}
                        </button>

                        {props.posts?.map(post=>(
                        <Post key={post.id} post={post} />
                    ))}
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchData})(Posts)