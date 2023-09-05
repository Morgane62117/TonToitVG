const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');
const Roof = require('../models/Roof');

//@desc     Get all roofs
//@route    GET /api/v1/roofs
//@access   Public

exports.getRoofs = asyncHandler(async (req, res, next) => {
        let query;

        //Copy req.query
        const reqQuery = {...req.query};

        //Fields to exclude
        const removeFields = ['page', 'limit'];

        //Loop over removeFields and delete them from reqQuery
        removeFields.forEach(param => delete reqQuery[param]);

        //Create query string
        let queryStr = JSON.stringify(reqQuery);
        
        //Filter in existing array for select fields
        queryStr = queryStr.replace(/\b(in)\b/g, match => `$${match}`);
        console.log(queryStr);

        query = Roof.find(JSON.parse(queryStr));

        //Sorted by last roof added
        query = query.sort('-createdAt');

        //Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await Roof.countDocuments();

        query = query.skip(startIndex).limit(limit);

        //Executing query
        const roofs = await query;

        //Pagination result
        const pagination = {};

        if(endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            }
        }

        if(startIndex > 0)
        pagination.prev = {
            page: page - 1,
            limit
        }
        res
        .status(200)
        .json({success:true, count: roofs.length, pagination, data: roofs });
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