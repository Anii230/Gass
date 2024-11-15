export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("User not authenticated!");

    jwt.verify(token, "secretkey", (err, user) => {
        if (err) return res.status(403).json("Token is not valid!");

        if (user.id !== req.body.id) {
            return res.status(403).json("You can only update your own profile!");
        }
        const q = "UPDATE users SET `name` = ?, `username` = ?, `city` = ? WHERE `id` = ?";

        const values = [
            req.body.name,
            req.body.username,
            req.body.city,
            user.id,
        ];

        // Execute the update query
        db.query(q, values, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User information updated successfully!");
        });
    });
};
