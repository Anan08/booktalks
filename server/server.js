import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";

dotenv.config();

const port = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed : ", error);
        process.exit(1);
    }
};

dbConnection();

app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`);
});

