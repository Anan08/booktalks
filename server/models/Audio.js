import mongoose from "mongoose";

const AudioSchema = new mongoose.Schema({
    title: {type : String, required : true},
    artist: {type : String, required : true},
    album: {type : String, required : true},
    genre: {type : String, required : true},
    duration: {type : Number, required : true},
    url: {type : String, required : true},
    userId: {type : String, required : true},
}, {timestamps : true});

const AudioModel = mongoose.model('Audio', AudioSchema);
export default AudioModel;