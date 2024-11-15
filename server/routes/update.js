import express from "express";
import { updateUser } from "../controllers/updateUser.js";

const router = express.Router();

// Update user profile route
router.put("/update", updateUser);

export default router;
