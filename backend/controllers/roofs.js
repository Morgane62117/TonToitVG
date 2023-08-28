const Roof = require('../models/Roof');
const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')

//@desc     Get all roofs
//@route    GET /api/v1/roofs
//@access   Public

exports.getRoofs = asyncHandler(async (req, res, next) => {
        const roofs = await Roof.find();

        res
        .status(200)
        .json({success:true, count: roofs.length, data: roofs});
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

//@desc     Delete a roof
//@route    GET /api/v1/roofs/:id
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