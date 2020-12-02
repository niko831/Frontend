import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios"

export const FETCH_DATA = "FETCH_DATA"
export const DATA_LOADING = "DATA_LOADING"
export const ADD_POSTS = "ADD_POSTS"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const DATA_FAIL = "DATA_FAIL"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const fetchData = () => (dispatch)=>{
    axiosWithAuth()
    .get("/posts")
    .then(res =>{
        console.log(res.data)
        dispatch({type: FETCH_DATA, payload: res.data})
    })
    // Console.dir displays more detailed data...or at least that's what I've been told anyway
    .catch(err => console.dir(err))
}

export const signUser = (userCreds) => (dispatch) => {
    console.log("Expected user data ====>", userCreds)
    axios
        .post("https://comakeredeploy.herokuapp.com/api/auth/register", userCreds)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.token)
            // dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
        })
        .then(() => window.location = '/posts')
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const logUser = (userCreds) => (dispatch) => {
    console.log("Expected user data ====>", userCreds)
    axios
        .post("https://comakeredeploy.herokuapp.com/api/auth/login", userCreds)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            // dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
        })
        .then(() => window.location = '/posts')
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const addData = (data, id) => (dispatch) => {
    console.log("Data recieved by the url ===>",data)
    axiosWithAuth()
    .post(`/posts/${id}`, data)
    .then(res => {
            console.log(res)
            dispatch({type: ADD_POSTS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: DATA_FAIL, payload: err})
        )
}

export const editData = (data, id) => (dispatch) => {
    console.log("Data recieved by the url ===>",data)
    axiosWithAuth()
    .put(`/posts/${id}`, data)
    .then(res => {
        console.log(res.data)
        dispatch({type: EDIT_POST, payload: {resData: res.data, postData: data}})
    })
    .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const deleteData = (id) => (dispatch) => {
    axiosWithAuth()
    .delete(`/posts/${id}`)
    .then(res => {
        console.log(res)
        dispatch({type: DELETE_POST, payload: id})
    })
    .catch(err => console.dir(err))
}