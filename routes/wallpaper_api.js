const express = require('express');
const router = express.Router();

const wallpaper_control = require('../public/javascripts/control/wallpaper_control');

router.get('/wallpaper', wallpaper_control.on);
router.get('/wallpaper/:id', wallpaper_control.onId);
router.post('/wallpaper/create', wallpaper_control.created);
router.put('/wallpaper/update/:id', wallpaper_control.update);
router.delete('/wallpaper/remove/:id', wallpaper_control.remove);

module.exports = router;
