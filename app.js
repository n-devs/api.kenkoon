const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const axios = require('axios')
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const logRouter = require('./routes/log_api');
const productRouter = require('./routes/product_api');
// const translatRouter = require('./routes/translat');
const wallpaperApiRouter = require('./routes/wallpaper_api');
const wallpaperByVideoRouter = require('./routes/wallpaperByVideo_api');
const collectionApiRouter = require('./routes/collection_api');
const catalogueRouter = require('./routes/catalogue_api');
const companyProfileRouter = require('./routes/company_profile_api');
// const contactRouter = require('./routes/contact');
const ourDesignerRouter = require('./routes/our_designer_api');
// const followUSRouter = require('./routes/followUS');
const joinOurTeamRouter = require('./routes/join_our_team_api');
const kenkoonHQRouter = require('./routes/kenkoon_hq_api');
const newsletRouter = require('./routes/newslet_api');
const newsletterPageRouter = require('./routes/newsletter_page_api');
const referenceRouter = require('./routes/reference_api');
const orderRouter = require('./routes/order_api');
const downloadCatalogueRouter = require('./routes/download_catalogue_api');
const contactRouter = require('./routes/contact_api');
const branchRouter = require('./routes/branch_api');
const socketIO = require('socket.io')
var bodyParser = require('body-parser');
const app = express();



// connent database
mongoose.connect('mongodb://127.0.0.1:27017/kenkoon');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

app.use(cors())

app.use(session({
  secret: 'n.devs',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json({limit: '10mb'}));
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));



app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/status', logRouter);
app.use('/api/admin', productRouter);
// app.use('/api/admin/page', translatRouter);
app.use('/api/admin/components', wallpaperApiRouter);
app.use('/api/admin/components', wallpaperByVideoRouter);
app.use('/api/admin', collectionApiRouter);
app.use('/api/admin', catalogueRouter);
app.use('/api/admin/about_us', companyProfileRouter);
app.use('/api/admin', contactRouter);
app.use('/api/admin', ourDesignerRouter);
// app.use('/api/admin/page', followUSRouter);
app.use('/api/admin', joinOurTeamRouter);
app.use('/api/admin', kenkoonHQRouter);
app.use('/api/admin', newsletRouter);
app.use('/api/admin', newsletterPageRouter);
app.use('/api/admin', referenceRouter);
app.use('/api/admin', orderRouter);
app.use('/api/admin', downloadCatalogueRouter);
app.use('/api/admin', branchRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// realtime api

const port = 9000;
const app_io = app.listen(port, function (err, result) {
  console.log('running in port http://localhost:' + port)
})

const io = socketIO.listen(app_io);

io.on('connection', client => {
  console.log('user connected')

  // เมื่อ Client ตัดการเชื่อมต่อ
  client.on('disconnect', () => {
    console.log('user disconnected')
  })

  // ส่งข้อมูลไปยัง Client ทุกตัวที่เขื่อมต่อแบบ Realtime
  client.on('view', function (message) {

    console.log("aa", message);

    io.sockets.emit('view', message)



  })
})

module.exports = app;
