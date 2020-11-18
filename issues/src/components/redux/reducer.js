import { ADD_POSTS, DATA_FAIL, DELETE_POST, EDIT_POST, FETCH_DATA } from "./actions"

// import jwt_decode from 'jwt-decode';
// const token = localStorage.getItem('token')
// export const id = token ? jwt_decode(token).subject : null

const initialState = {
    posts: [],
    post: "",
    error: "",
    // userId: "",
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                posts: action.payload,
            }
        case ADD_POSTS:
            return{
                ...state,
                posts: action.payload,
                creatingPost: false,
            }
        case EDIT_POST:
            return{
                ...state,
                posts: action.payload,
                editing: false,
            }
        case DELETE_POST:
            return{
                ...state,
            }
        case DATA_FAIL:
            return{
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}