import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
  enrolledCourses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", 
        required: true,
      },
      lectureCompleted:{
        type: [Number]
      },
      completed: {
        type: Boolean,
        default: false,
      },
      progress:{
        type: Number,
        default:0,
        required: true
      }
    }
  ],
  imgUrl:{
    type: String,
    default: null
  },
  
  isAdmin:{
    type: Boolean,
    required: true,
    default: false
  },
  friends: [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" 
    }
  ],
  title:{
    type: String,
  },
  skills : [String],
  
  totalPoints: {
    type: Number
  }

}, { timestamps: true });

export default mongoose.model("User", UserSchema);
