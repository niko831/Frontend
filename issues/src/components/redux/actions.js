import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA = "FETCH_DATA"
export const DATA_LOADING = "DATA_LOADING"
export const ADD_POSTS = "ADD_POSTS"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"

export const fetchData = () => (dispatch)=>{
    axiosWithAuth()
        .get("/posts")
        .then(res =>{
            console.log(res.data)
            dispatch({type: FETCH_DATA, payload: res.data})
        })
        .catch(err => console.dir(err))
}

export const addData = (id, data) => (dispatch) => {
    axiosWithAuth()
        .post(`/posts/${id}`, data)
        .then(res => {
            console.log(res.data)
            dispatch({type: ADD_POSTS, payload: res.data})
        })
        .catch(err => console.dir(err))
}

export const editData = (id, data) => (dispatch) => {
    axiosWithAuth()
        .put(`/posts/${id}`, data)
        .then(res => {
            console.log(res.data)
            dispatch({type: EDIT_POST, payload: res.data})
        })
        .catch(err => console.dir(err))
}

export const deleteData = (id) => (dispatch) => {
    axiosWithAuth()
            .delete(`/posts/${id}`)
            .then(res => {
                console.log(res)
                dispatch({type: DELETE_POST})
                window.location.reload()
            })
            .catch(err => console.dir(err))
}