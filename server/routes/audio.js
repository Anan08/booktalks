import express from "express";
import AudioModel from "../model/Audio";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const audios = AudioModel.find();
        res.json(audios); 
    } catch (error) {
        res.status(500).json({error : error.message});
    } 
});


router.get('/user/:id/:playlist', async (req, res) => {
    try {
        const id = req.params.id;
        const playlist = req.params.playlist;
        const audios= AudioModel.find({userId : id});
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


