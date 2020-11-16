import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA = "FETCH_DATA"
export const DATA_LOADING = "DATA_LOADING"
export const ADD_POSTS = "ADD_POSTS"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"

export const fetchData = () => (dispatch)=>{
    axiosWithAuth()
        .then(res =>{
            console.log(res.data)
            dispatch({type: FETCH_DATA, payload: res.data})
        })
        .catch(err => console.dir(err))
}