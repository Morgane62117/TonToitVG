const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env'});

//Load models
const Roof = require('./models/Roof');

//Connect to DB
mongoose.connect(process.env.MONGO_URI);

//Read JSON files
const roofs = JSON.parse(fs.readFileSync(`${__dirname}/_data/roofs.json`, 'utf-8'));

//Import into DB
const importData = async () => {
    try {
        await Roof.create(roofs);

        console.log('Data imported...');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

//Delete data
const deleteData = async () => {
    try {
        await Roof.deleteMany();

        console.log('Data destroyed...');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}