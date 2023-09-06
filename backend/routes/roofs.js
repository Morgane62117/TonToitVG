const express = require('express');
const { getRoof, 
        getRoofs, 
        createRoof, 
        updateRoof, 
        deleteRoof,
        getRoofsInRadiusRoof,
        roofPhotoUpload
    } = require('../controllers/roofs');

const router= express.Router();

router.route('/radius/:zipcode/:distance').get(getRoofsInRadiusRoof);

router.route('/:id/photo').put(roofPhotoUpload);

router
    .route('/')
    .get(getRoofs)
    .post(createRoof);

router
    .route('/:id')
    .get(getRoof)
    .put(updateRoof)
    .delete(deleteRoof);

module.exports = router;