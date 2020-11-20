import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios"
import { Redirect } from "react-router-dom"

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
    // dispatch({ type: DATA_LOADING })
    console.log("Expected user data ====>", userCreds)
    axios
        .post("https://bd-comake.herokuapp.com/api/auth/register", userCreds)
        .then((res) => {
            console.log(res)
            window.location = `/login`
        })
        .catch(err =>
            dispatch({type: DATA_FAIL, payload: err})
        )
}

export const logUser = (userCreds) => (dispatch) => {
    // dispatch({ type: DATA_LOADING })
    console.log("Expected user data ====>", userCreds)
    axiosWithAuth()
        .post("auth/login", userCreds)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
            console.log(localStorage)
            dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
            window.location = `/posts`
        })
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