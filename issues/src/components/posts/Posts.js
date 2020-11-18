import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';
import Post from './Post';
import PostForm from './PostForm';

const Posts = (props) => {
    const [creatingPost, setCreactingPost] = useState(false)
    console.log(props.posts)

    useEffect(()=>{
        props.fetchData()
    }, [props.posts.length])


    return(
        <div>
            <h1>Community Posts</h1>

            <div style={{display:`${!creatingPost ? "none" : "block" }`, borderTop:"1px solid black", borderBottom:"1px solid black", margin:"2% 0"}} >

                <PostForm/>
            </div>
            {
                !props.posts
                ? (
                    <div>
                        <h2>Looks like no has any issues to report...yet. Lets change that</h2>

                        <button onClick={()=>setCreactingPost(!creatingPost)} >{!creatingPost ? "Post an Issue" : "Cancel"}</button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={()=>setCreactingPost(!creatingPost)} >{!creatingPost ? "Post an Issue" : "Cancel"}</button>

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