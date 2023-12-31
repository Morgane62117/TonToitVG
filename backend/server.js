const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db');

//Load env vars
dotenv.config( { path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const roofs = require('./routes/roofs');

const app = express();

//Body parser
app.use(express.json())

//Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//File uploading
app.use(fileupload());

//Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use('/api/v1/roofs', roofs);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server and exit process
    server.close(() => process.exit(1))
})
