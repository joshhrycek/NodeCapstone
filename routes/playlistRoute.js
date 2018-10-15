const express = require('express');
const router = express.Router();

const {Playlist} = require('./model/playlist.js');

router.get('/', (req, res) => {
    res.json(Playlist.get());
});

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['name', 'description'];
});

router.delete('/:id', (req, res) => {
    
});

router.put('/:id', jsonParser, (req, res) => {

});