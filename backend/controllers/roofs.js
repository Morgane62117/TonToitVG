//@desc     Get all roofs
//@route    GET /api/v1/roofs
//@access   Public

exports.getRoofs = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
}

//@desc     Get single roof
//@route    GET /api/v1/roofs/:id
//@access   Public

exports.getRoof = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get the bootcamp ${req.params.id}`});
}

//@desc     Create a roof
//@route    GET /api/v1/roofs/
//@access   Private

exports.createRoof = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp'});
}

//@desc     Update a roof
//@route    GET /api/v1/roofs/:id
//@access   Private

exports.updateRoof = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`});
}

//@desc     Delete a roof
//@route    GET /api/v1/roofs/:id
//@access   Private

exports.deleteRoof = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`});
}