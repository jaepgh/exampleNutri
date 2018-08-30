
var friendsData = require("../data/friends");
var friends = new friendsData();

function apiRoutes() {

    this.handleApiRoutes = function (app, path) {
        app.get("/api/friends", function (req, res) {
            res.json(friends.getFriends());
        });

        app.post("/api/friends", function (req, res) {
            var newUser = req.body;
            res.json(friends.addNewUser(newUser));
        });
    }
}

module.exports = apiRoutes;