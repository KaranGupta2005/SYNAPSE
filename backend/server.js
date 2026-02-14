import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import webpush from "web-push";

import connectToDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors({
    origin:process.env.FRONTEND_URL || "http://localhost:3000",
    credentials:true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get("/test",(req,res)=>{
    res.send("Server is running.....");
})

await connectToDB();

//routes
app.use("/api/auth", authRoutes);
app.use("/api/session", sessionRoutes);
app.use("/api/feedback", feedbackRoutes);

//global error handler
app.use((err,req,res,next)=>{
    const status=typeof err.status==='number'?err.status:500;
    const message=err.message||"Internal Server Error";
    if(res.headersSent){
        return next(err);
    }
    res.status(status).json({message});
});

const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
