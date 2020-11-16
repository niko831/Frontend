import { act } from "react-dom/test-utils"
import { FETCH_DATA } from "./actions"

const initialState = {
    posts: [],
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                posts: action.payload,
            }
        default:
            return state
    }
}