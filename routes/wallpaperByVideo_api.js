const express = require('express');
const router = express.Router();

const wallpaperByVideo_control = require('../public/javascripts/control/wallpaperByVideo_control');

router.get('/wallpaper_by_video', wallpaperByVideo_control.on);
router.get('/wallpaper_by_video/:id', wallpaperByVideo_control.onId);
router.post('/wallpaper_by_video/create', wallpaperByVideo_control.created);
router.put('/wallpaper_by_video/update/:id', wallpaperByVideo_control.update);
router.delete('/wallpaper_by_video/remove/:id', wallpaperByVideo_control.remove);

module.exports = router;
