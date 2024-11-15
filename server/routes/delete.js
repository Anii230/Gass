// userRoutes.js
import express from 'express';
import { deleteUser } from '../controllers/delete.js'; // Import the controller function

const router = express.Router();

// DELETE /api/users/delete
router.delete('/users/delete', deleteUser);

export default router;  // Use export default for the router
