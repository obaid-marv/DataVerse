import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
            httpOnly:true
        }).status(200).json({...otherdetails});
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