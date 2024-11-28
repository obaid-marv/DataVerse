import axiosInstance from "../config/api"

export const getAlldatasets = async() =>{
    try {
        
        const response = await axiosInstance.get(`/dataset/getAll`)
        console.log("all datasetdata is : ", response.data);
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}