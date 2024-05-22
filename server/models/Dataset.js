import mongoose from "mongoose";

const DatasetSchema = new mongoose.Schema({

    url:{
        type: String,
        required:true,
    },
    imgurl:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true  
    },
    
},{ timestamps:true}
);

export default mongoose.model("Dataset",DatasetSchema);