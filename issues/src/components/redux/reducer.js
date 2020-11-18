import { FETCH_DATA, DATA_FAIL } from "./actions";

import jwt_decode from 'jwt-decode';
const token = localStorage.getItem('token')
const id = token ? jwt_decode(token).subject : null

const initialState = {
    posts: [],
    userId: id,
    error: 'Error loading'
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                posts: action.payload,
            }
            case DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}