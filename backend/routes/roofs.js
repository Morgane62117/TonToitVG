const express = require('express');
const { getRoof, 
        getRoofs, 
        createRoof, 
        updateRoof, 
        deleteRoof} = require('../controllers/roofs');

const router= express.Router();

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