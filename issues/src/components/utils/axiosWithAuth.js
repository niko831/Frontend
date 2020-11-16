import axios from 'axios'

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "https://bd-comake.herokuapp.com/api",
        headers: {
            Authorization: token,
        },
    })
}