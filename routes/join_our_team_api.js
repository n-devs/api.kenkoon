const express = require('express');
const router = express.Router();

const join_our_team_control = require('../public/javascripts/control/join_our_team_control');

router.get('/join_our_team', join_our_team_control.on);
router.get('/join_our_team/:id', join_our_team_control.onId);
router.post('/join_our_team/create', join_our_team_control.created);
router.put('/join_our_team/update/:id', join_our_team_control.update);
router.delete('/join_our_team/remove/:id', join_our_team_control.remove);

module.exports = router;
