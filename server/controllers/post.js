import Post from "../models/Post.js";
import { createError } from "../utils/error.js";

export const createPost = async (req, res, next) => {
    try {
        const newPost = new Post({
            imgUrl: req.body.imgUrl,
            userId: req.user.id,
            description: req.body.description,
            upVotes: req.body.upVotes || 0, 
        });

        await newPost.save();
        res.status(200).json("Post has been created successfully");
    } catch (err) {
        next(err);
    }
};


export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate('userId');
        if (!posts || posts.length === 0) {
            return next(createError(404, "No Posts found"));
        }
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return next(createError(404, "Post not found"));
        }
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
};

// Update a Post
export const updatePost = async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // Allow updating any field provided in the body
            { new: true } // Return the updated document
        );
        if (!updatedPost) {
            return next(createError(404, "Post not found for updating"));
        }
        res.status(200).json("Post has been updated successfully");
    } catch (err) {
        next(err);
    }
};

// Increment upVotes for a Post
export const incrementUpVotes = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $inc: { upVotes: 1 } }, // Increment upVotes by 1
            { new: true } // Return the updated document
        );
        if (!post) {
            return next(createError(404, "Post not found for upvoting"));
        }
        res.status(200).json("Upvote added successfully");
    } catch (err) {
        next(err);
    }
};


export const deletePost = async (req, res, next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return next(createError(404, "Post not found for deletion"));
        }
        res.status(200).json("Post has been deleted successfully");
    } catch (err) {
        next(err);
    }
};

export const addComment = async (req, res, next) => {
    try {
        const { content, username, imgUrl } = req.body;
        const { id: postId } = req.params; 

        if (!content || !username) {
            return next(createError(400, "Content and username are required"));
        }

        const post = await Post.findById(postId);
        if (!post) {
            return next(createError(404, "Post not found"));
        }

        const newComment = {
            userId: req.user.id,
            imgUrl: imgUrl || "", 
            username,
            content,
        };

        post.comments.push(newComment);
        const updatedPost = await post.save();

        res.status(201).json({message: "Successfully added comment", updatedPost});
    } catch (err) {
        next(err);
    }
};