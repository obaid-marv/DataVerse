import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

import cloudinary from "../utils/cloudinary.js";

export const register = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ 
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });
        await newUser.save();
        res.status(200).json("User has been created");
    }
    catch(err){
        next(err);
    }
}


export const login = async(req,res,next)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) 
        return next(createError(404,"user not found"));
        
        const ispassword = await bcrypt.compare(req.body.password, user.password);


        if(!ispassword)
        return next(createError(400,"Incorrect user or password"));

        const { password,isAdmin,...otherdetails} = user._doc;
        
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT);


        res.cookie("access_token",token,{
            httpOnly:false
        }).status(200).json({...otherdetails,token});
    }
    catch(err){
        next(err);
    }
}


export const forgotPassword = async(req,res,next)=>{
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const resetCode = Math.floor(100000 + Math.random() * 900000);

        user.resetPasswordToken = resetCode; 
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

        await user.save();

        console.log("mail", process.env.EMAIL_USER);
        console.log("PASS", process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset',
            text: `Your password reset code is: ${resetCode}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Password reset token sent to email!' });
    } catch (error) {
        res.status(500).json({ error: 'Server error', error });
    }
}


export const fetchUserByToken = async (req, res, next)=>{

    try{
        const user = await User.findById(req.user.id).select("-password");;

        if(!user)
            return res.status(404).json({ message: "User not found!"})

        res.status(200).json(user);

    }
    catch(err){
        next(err)
    }

}

export const fetchUserProgress = async (req, res, next)=>{

    try{
        const user = await User.findById(req.user.id).populate('enrolledCourses.courseId')

        if(!user)
            return res.status(404).json({ message: "User not found!"})


        res.status(200).json({enrolledCourses: user.enrolledCourses});

    }
    catch(err){
        next(err)
    }

}
 // Cloudinary setup

export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // Ensure token-based authentication
    
    const { name, password } = req.body;
    const profilePicture = req.file; // Assuming profile picture is coming as a file upload

    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    // Update only the changed fields
    if (name && name !== user.username) {
      user.username = name;
    }

    if (password && password !== "********") {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      user.password = hashedPassword;
    }

    try{
    if (profilePicture) {
        
            const result = await cloudinary.uploader.upload(profilePicture.path, {
        folder: "user_profiles",
        public_id: `${user._id}_profile`,
      });
     

      user.imgUrl = result.secure_url; // Save Cloudinary URL to user's profile
    }
    }
    catch(err){
        console.log("clpudinary error:", err)
    }
    // Save the updated user information
    await user.save();

    res.status(200).json({ message: "Profile updated successfully!", user });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
    try{
        console.log("182 HERE")
        const users = await User.find({});
        console.log("184 HERE")
        if(users.length==0)
            return res.status(404).json({ message: "Users not found!"})

        res.status(200).json({ message: "Users fetched successfully!", users})

    }
    catch(err){
        next(err)
    }
}


export const deleteUserById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser)
            return createError(404, "User not found")
        res.status(200).json({ message: "Users deleted successfully!", deletedUser})

    }
    catch(err){
        next(err)
    }
}

