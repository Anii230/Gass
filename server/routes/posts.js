import express from "express";
import { createPost, getPosts } from "../controllers/post.js";
import { uploadImage } from "../controllers/uploadPost.js"; // Ensure getPosts is imported from the controller

const router = express.Router();

// POST route for creating posts
router.post("/create", uploadImage, createPost);

// GET route for fetching all posts
router.get("/", getPosts);

export default router;
