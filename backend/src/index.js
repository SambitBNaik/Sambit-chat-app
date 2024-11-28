import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js';



dotenv.config();
const PORT=process.env.PORT;

const app=express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
})