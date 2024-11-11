import express from "express";
const app = express()

import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

//m
app.use(express.json())

app.use("/server/users", userRoutes)
app.use("/server/posts", postRoutes)
app.use("/server/likes", likeRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/comments", commentRoutes)

app.listen(8800, () => {
    console.log("Connected")
})
