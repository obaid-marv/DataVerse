import User from "../models/User.js";
import bcrypt from "bcryptjs";
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