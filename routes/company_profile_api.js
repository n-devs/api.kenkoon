const express = require('express');
const router = express.Router();

const company_profile_control = require('../public/javascripts/control/company_profile_control');

router.get('/company_profile', company_profile_control.on);
router.get('/company_profile/:id', company_profile_control.onId);
router.post('/company_profile/create', company_profile_control.created);
router.put('/company_profile/update/:id', company_profile_control.update);
router.delete('/company_profile/remove/:id', company_profile_control.remove);

module.exports = router;
