import mongoose from "mongoose";


const LectureSchema = new mongoose.Schema(
    {
      title: {
        type: String,
      },
      type: {
        type: String,
        enum:["video", "text"],
      },
      videoUrl: {
        type: String,
      },
      index:{
        type: Number,
      },
      quiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      }], 
      transcript: {
        type: String,
        required: true
      }
    },
    { timestamps: true }
  );

  export default mongoose.model("Lecture", LectureSchema);