const { check } = require('express-validator');

module.exports.validate = (method) => {
    switch (method) {
        case "createSeller" : 
        return [
            check('fname', 'First name is required.').exists({checkFalsy: true}).trim().escape(),
            check('lname', 'Last name is required.').exists({checkFalsy: true}).trim().escape(),
            check('contact', 'Contact Number is required').exists({checkFalsy: true})
                .isInt().withMessage('Must be only digits.')
                .isLength({min: 10, max: 10}).withMessage('Must be only 10 digits long.'),
        ]

        case "updateProfile" : 
        return [
            check('profilePicUrl', 'Profile Picture is missing.').optional().exists({checkFalsy: true}).isURL(),
            check('userType', 'User Type is required.').exists({checkFalsy: true}),
            check('compName', 'Company Name is required.').exists({checkFalsy: true}).trim().escape(),
            check('state', 'State is required.').exists({checkFalsy: true}),
            check('district', 'District is required.').exists({checkFalsy: true}),
            check('subdistrict', 'Sub_District is required.').exists({checkFalsy: true}).trim().escape(),
            check('block', '').optional(),
            check('vill', '').optional(),
            check('address', 'Address is required.').exists({checkFalsy: true}),
            check('pincode', 'Pincode is required.').exists({checkFalsy: true})
                .isInt().withMessage('Only intergers required')
                .isLength({min: 6, max: 6}).withMessage('Must be only 6 digits long.'),
            check('gst','GST is required.').exists({checkFalsy: true})
        ]
    }
}