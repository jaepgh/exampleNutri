var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up to handle posibles http routes
var htmlRoutes = require('./app/routing/htmlRoutes');
var routes = new htmlRoutes();

// Sets up api requests
var apiRoutes = require('./app/routing/apiRoutes');
var api = new apiRoutes();

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handling the routes
routes.handleRoutes(app, path.join(__dirname, '/app/public/'));

//Handling the api
api.handleApiRoutes(app, path.join(__dirname, '/app/public/'));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//----------------------------------------------------------------------------------
var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: '95128c41',
    appKey: '9c7352952e4f2e99216dc39377db47d8'
    // debug: true, // defaults to false
});