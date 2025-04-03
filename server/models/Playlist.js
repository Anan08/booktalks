import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
    id : {type : String, required : true},
    title : {type : String, required : true},
    desc : {type : String, required : true}
})

const PlaylistModel = mongoose.model(playlistSchema);
export default PlaylistModel;