import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import deleteRoutes from "./routes/delete.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import updateRoutes from "./routes/update.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());

// Define routes
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);  // Handles both post creation and image upload
app.use("/server/likes", likeRoutes);
app.use("/server/auth", authRoutes);
app.use("/server/comments", commentRoutes);
app.use("/server/update", updateRoutes);
app.use("/server/delete", deleteRoutes);

// Serve static files from the 'uploads' folder (images)
app.use("/uploads", express.static("uploads"));

app.listen(8800, () => {
    console.log("Server running on http://localhost:8800");
});
