import PlaylistModel from "../model/Playlist";
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        playlilsts = PlaylistModel.find();
        res.json(playlilsts);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

