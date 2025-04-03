import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    playlists: [{type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}],
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
export default User;