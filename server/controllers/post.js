import { db } from "../connect.js";

export const createPost = (req, res) => {
    const { desc, userid } = req.body;

    if (!userid) return res.status(400).json("User ID is required");

    const imgPath = req.file ? `/uploads/${req.file.filename}` : null;

    // Insert query to create a new post
    const q = "INSERT INTO posts (`desc`, `img`, `userid`, `createdAt`) VALUES (?)";

    // Prepare the values for the post
    const values = [
        desc || null,
        imgPath,
        userid,
        new Date(),
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created successfully!");
    });
};

export const getPosts = (req, res) => {
    const q = "SELECT * FROM posts ORDER BY createdAt DESC";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data); // Return posts in response
    });
};
