const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const azvaultRoute = require('./server/az-vault/az-vault.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/keys', azvaultRoute);

module.exports = router;
