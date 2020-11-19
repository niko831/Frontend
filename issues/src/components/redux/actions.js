import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios"

export const FETCH_DATA = "FETCH_DATA"
export const DATA_LOADING = "DATA_LOADING"
export const ADD_POSTS = "ADD_POSTS"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const DATA_FAIL = "DATA_FAIL"

export const fetchData = () => (dispatch)=>{
    // axiosWithAuth()
    axios.get("https://bd-comake.herokuapp.com/api/posts")
    .then(res =>{
        console.log(res.data)
        dispatch({type: FETCH_DATA, payload: res.data})
    })
    // Console.dir displays more detailed data...or at least that's what I've been told anyway
    .catch(err => console.dir(err))
}

export const signUser = (userCreds, id=1) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axios
        .post("https://bd-comake.herokuapp.com/api/auth/register", userCreds)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(localStorage)
            console.log(res)
        })
        .then(() => window.location = `/user/${id}`)
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const logUser = (userCreds) => (dispatch) => {
    dispatch({ type: DATA_LOADING })
    axios
        .post("https://bd-comake.herokuapp.com/api/auth/login", userCreds)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(localStorage)
            console.log(res)
        })
        .then(() => window.location = `/posts`)
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const addData = (data, id=1) => (dispatch) => {
    // axiosWithAuth()
    console.log("Data recieved by the url ===>",data)
    axios.post(`https://bd-comake.herokuapp.com/api/posts/${id}`, data)
    .then(res => {
            console.log(res)
            dispatch({type: ADD_POSTS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: DATA_FAIL, payload: err})
        )
}

export const editData = (data, id) => (dispatch) => {
    // axiosWithAuth()
    console.log("Data recieved by the url ===>",data)
    axios.put(`https://bd-comake.herokuapp.com/api/posts/${id}`, data)
    .then(res => {
        console.log(res.data)
        dispatch({type: EDIT_POST, payload: {resData: res.data, postData: data}})
    })
    .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const deleteData = (id) => (dispatch) => {
    // axiosWithAuth()
    axios.delete(`https://bd-comake.herokuapp.com/api/posts/${id}`)
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_POST, payload: id})
    })
    .catch(err => console.dir(err))
}