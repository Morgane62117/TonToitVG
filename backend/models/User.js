const mongoose = require('mongoose');

const RoofSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please make sure the email is valid']
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: false,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    lastname: {
        type: String,
        required: [true, 'Please add a name'],
        unique: false,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    associatedRoof: []
})