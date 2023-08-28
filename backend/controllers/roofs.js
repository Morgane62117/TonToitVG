const Roof = require('../models/Roof')

//@desc     Get all roofs
//@route    GET /api/v1/roofs
//@access   Public

exports.getRoofs = async (req, res, next) => {
    try {
        const roofs = await Roof.find();

        res.status(200).json({success:true, count: roofs.length, data: roofs});
        
    } catch (error) {
        res.status(400).json({success:false, err: error})
    }
}

//@desc     Get single roof
//@route    GET /api/v1/roofs/:id
//@access   Public

exports.getRoof = async (req, res, next) => {
    try {
        const roof = await Roof.findById(req.params.id);

        if(!roof) {
            return res.status(400).json({success: false })
        }

        res.status(200).json({success:true, data: roof});
    } catch (error) {
        res.status(400).json({success:false, err: error});
        // next(error);
    }
}

//@desc     Create a roof
//@route    GET /api/v1/roofs/
//@access   Private

exports.createRoof = async (req, res, next) => {
    try {
        const roof = await Roof.create(req.body);
        res.status(201).json({
            success: true,
            data: roof
        })
    } catch (error) {
        res.status(400).json({success:false, err: error });
    }

}

//@desc     Update a roof
//@route    GET /api/v1/roofs/:id
//@access   Private

exports.updateRoof = async (req, res, next) => {
    try {
        const roof = await Roof.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!roof) {
            return res.status(400).json({success: false});
        }  
        res.status(200).json({success: true, data: roof});

    } catch (error) {
        res.status(400).json({success: false, err: error});
    }
}

//@desc     Delete a roof
//@route    GET /api/v1/roofs/:id
//@access   Private

exports.deleteRoof = async (req, res, next) => {
    try {
        const roof = await Roof.findByIdAndDelete(req.params.id);
    
        if(!roof) {
            return res.status(400).json({success: false});
        }  
        res.status(200).json({success: true, data: {}});

    } catch (error) {
        res.status(400).json({success: false, err: error});
    }
}