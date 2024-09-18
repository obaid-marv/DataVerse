import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecture',
      }
    ],
    totalLectures:{
      type: Number,
      required: true,
      default:0
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
