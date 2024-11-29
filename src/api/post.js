
import axiosInstance from "../config/api"

export const createPost = async(data) =>{
    try {
        const response = await axiosInstance.post(`/post/create`,data)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}

export const getAllPosts = async() =>{
    try {
        const response = await axiosInstance.get(`/post/all`)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}

export const addComment = async(data, postId) => {
    try {
        const response = await axiosInstance.post(`/post/${postId}/comments`,data)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }   
}