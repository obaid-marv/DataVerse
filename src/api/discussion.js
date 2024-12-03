import axiosInstance from "../config/api"

export const createDiscussion = async(data) =>{
    try {
        const response = await axiosInstance.post(`/discussion/create`, data)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}


export const getAllDiscussion = async(data) =>{
    try {
        const response = await axiosInstance.get(`/discussion`, data)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}


export const getDiscussionById = async(id) =>{
    try {
        const response = await axiosInstance.get(`/discussion/${id}`)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}


export const AddReplyToDiscussion = async(discussionId, data) =>{
    try {
        const response = await axiosInstance.post(`/discussion/${discussionId}/reply`, data)
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}