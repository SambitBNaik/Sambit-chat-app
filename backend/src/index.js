import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import path  from "path";

import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import {app , server} from "./lib/socket.js";



dotenv.config();
const PORT=process.env.PORT;
const __driname=path.resolve();



app.use(express.json({ limit :"10mb"}));
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoute);

if(process.env.NODE_ENV= "prodction"){
    app.use(express.static(path.join(__driname,"../frontend/dist")));

    app.get("*",(req, res)=>{
        res.sendFile(path.join(__driname,"../frontend","dist","index.html"));
    })
}

server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
})