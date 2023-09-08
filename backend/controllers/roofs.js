const path = require('path');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');
const Roof = require('../models/Roof');

//@desc     Get all roofs
//@route    GET /api/v1/roofs
//@access   Public

exports.getRoofs = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

//@desc     Get single roof
//@route    GET /api/v1/roofs/:id
//@access   Public

exports.getRoof = asyncHandler(async (req, res, next) => {
        const roof = await Roof.findById(req.params.id);

        if(!roof) {
            return next(
                new ErrorResponse(`Roof not found with id of ${req.params.id}, 404`)
            );
        }
        res.status(200).json({success:true, data: roof});
});

//@desc     Create a roof
//@route    GET /api/v1/roofs/
//@access   Private

exports.createRoof = asyncHandler(async (req, res, next) => {
        const roof = await Roof.create(req.body);
        res.status(201).json({
            success: true,
            data: roof
        })
});

//@desc     Update a roof
//@route    GET /api/v1/roofs/:id
//@access   Private

exports.updateRoof = asyncHandler(async (req, res, next) => {
        const roof = await Roof.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!roof) {
            return next(
                new ErrorResponse(`Roof not found with id of ${req.params.id}, 404`)
            );
        }  
        res.status(200).json({success: true, data: roof});
});

//@desc     Get roof within a radius
//@route    GET /api/v1/roofs/radius/:zipcode/:distance
//@access   Public

exports.getRoofsInRadiusRoof = asyncHandler(async (req, res, next) => {
    const { zipcode, distance } = req.params;

    //Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // Calc radius using radians
    // Divide dist by radius of Earth
    // Earth radius = 6,378 km
    const radius = distance / 6378;

    const roofs = await Roof.find({
        location: { $geoWithin: { $centerSphere: [ [lng, lat], radius] } }
    });
    res.status(200).json({
        success: true,
        count: roofs.length,
        data: roofs
    })
});

//@desc     Delete a roof
//@route    DELETE /api/v1/roofs/:id
//@access   Private

exports.deleteRoof = asyncHandler(async (req, res, next) => {
        const roof = await Roof.findByIdAndDelete(req.params.id);
    
        if(!roof) {
            return next(
                new ErrorResponse(`Roof not found with id of ${req.params.id}, 404`)
            );
        }  

        res.status(200).json({success: true, data: {}});
});

//@desc     Upload photo for a roof
//@route    PUT /api/v1/roofs/:id/photo
//@access   Private

exports.roofPhotoUpload = asyncHandler(async (req, res, next) => {
    const roof = await Roof.findById(req.params.id);

    if(!roof) {
        return next(
            new ErrorResponse(`Roof not found with id of ${req.params.id}, 404`)
        );
    }  

    if(!req.files) {
        return next(new ErrorResponse(`Please upload a file`, 400));
    }

    const file = req.files.file;

    //Make sure that the image is a photo
    if(!file.mimetype.startsWith('image')) {
        return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    //Check file size
    if(file.size > process.env.MAX_FILE_UPLOAD) {
        return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
    }

    //Create custom file name
    file.name = `photo_${roof._id}${path.parse(file.name).ext}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
        if(err) {
            console.error(err);
            return next(new ErrorResponse(`Problem with file upload`, 500));
        }
        await Roof.findByIdAndUpdate(req.params.id, {photos: file.name});
        res.status(200).json({
            success: true,
            data: file.name
        })
    });
    console.log(file.name);
});