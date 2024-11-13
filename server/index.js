import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

// Middleware to allow credentials (cookies)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");  // Allow credentials (cookies)
    next();
});

app.use(express.json());

// CORS Configuration - Allow only specific origin and allow credentials
app.use(cors({
    origin: "http://localhost:5173",  // Correct the URL to match your frontend
    credentials: true,  // Allow credentials (cookies)
}));

app.use(cookieParser());

// Define routes
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);
app.use("/server/likes", likeRoutes);
app.use("/server/auth", authRoutes);
app.use("/server/comments", commentRoutes);

app.listen(8800, () => {
    console.log("Server running on http://localhost:8800");
});
