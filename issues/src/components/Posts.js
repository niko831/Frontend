import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './redux/actions';

const Posts = (props) => {

    useEffect(()=>{
        props.fetchData()
    }, [])

    return(
        <div>
            <h1>Community Posts</h1>
            {
                !props.posts
                ? (
                    <div>
                        <h2>Looks like no has any issues to report...yet. Lets change that</h2>
                        <button>Post an Issue</button>
                    </div>
                )
                : (
                    props.posts.map(post=>(
                <Post key={post.id} post={post} />
            ))
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