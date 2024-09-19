import axios from "axios"
import {API_BASE__URL} from "../config/api"

export const getAlldatasets = async() =>{
    try {
        
        const response = await axios.get(`${API_BASE__URL}/dataset/getAll`)
        console.log("all datasetdata is : ", response.data);
        return response.data;
    } catch (error) {
        console.log("error is : ", error )
    }
}