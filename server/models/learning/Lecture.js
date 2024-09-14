import mongoose from "mongoose";


const LectureSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      videoUrl: {
        type: String,
        required: true,
      },
      index:{
        type: Number,
        required: true
      },
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true,
      }, 
    },
    { timestamps: true }
  );

  export default mongoose.model("Lecture", LectureSchema);