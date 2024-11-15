import express from "express";
import { uploadImage } from "../controllers/uploadPost.js";


const router = express.Router();

// Route for creating a post and uploading an image
router.post("/create", uploadImage, (req, res) => {
    // Here you can directly call createPost after uploadImage
    res.status(200).json("Image uploaded and post created.");
});

export default router;
