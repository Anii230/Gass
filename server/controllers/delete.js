// userController.js
import { db } from '../connect.js'; // Use import for your database connection

// Controller function to delete a user
const deleteUser = (req, res) => {
    const userId = req.body.userId;  // Assuming you send the user ID to delete

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    const query = 'DELETE FROM users WHERE id = ?';

    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ message: 'Error deleting user profile', error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User profile deleted successfully' });
    });
};

export { deleteUser }; // Use export instead of module.exports
