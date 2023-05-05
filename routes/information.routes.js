const { Router } = require('express');
const { check } = require('express-validator');


const { getInformation } = require('../controllers/information.controller');

const router = Router();


/** 
 * @route GET api/information/:id
 * @desc get information from a specific station
 * @access Public
 * @param {string} id - required
 * @returns {object} 200 | 400 - Bad request | 500 - Server error
*/
router.get('/:id',
    //  middlewares to validate fields
    [
        check('id', 'ID is required').not().isEmpty(), //id
    ],
    getInformation
);


module.exports = router;