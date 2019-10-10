const express = require('express');
// const validate = require('express-validation');
// const expressJwt = require('express-jwt');
// const paramValidation = require('../../config/param-validation');
const azVaultCtrl = require('./az-vault.controller');
// const config = require('../../config/config');

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/').get(azVaultCtrl.getSecret);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
// router
//   .route('/random-number')
//   .get(expressJwt({ secret: config.jwtSecret }), azVaultCtrl.getRandomNumber);

module.exports = router;
