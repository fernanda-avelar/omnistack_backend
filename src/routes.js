const express = require('express')
const multer = require('multer');

// Config to import multipart form
const uploadConfig = require('./config/upload');

// Controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

// req.query -> access all parameters on query
// req.params -> access all route params
// req.body -> access all payload 

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single('thumbnail'), SpotController.store);
routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.get("/dashboard", DashboardController.show);



module.exports = routes;