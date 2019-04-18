import { Schema } from "mongoose";

// Todo: create Album Schema
const mongoose = require('mongoose');

const AlbumSchema = new Schema({
    title:String,
    date:Date,
    copiesSolid:Number,
    numberTracks:Number,
    image:String,
    revenue:Number
})

module.exports = AlbumSchema;
