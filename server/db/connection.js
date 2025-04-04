import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed : ", error);
        process.exit(1);
    }
};


export default dbConnection