var friends = [
    {
        name: "test user",
        image: "https://static.thenounproject.com/png/27969-200.png",
        email: "test.user@gmail.com",
        survey: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        match: {
            id: -1,
            percentage: 0
        }
    }
];

function friendsData() {
    this.getFriends = function () {
        return friends;
    }

    this.addNewUser = function (newUser) {
        //Get the most compatible match
        var closeMatch = getMostCompatible(newUser.survey);
        //Set the match field with the retrieve information
        newUser.match = closeMatch;

        friends.push(newUser);

        //Update the references of the closest match
        friends[closeMatch.id].match.id = friends.length - 1;
        friends[closeMatch.id].match.percentage = closeMatch.percentage;

        return friends[closeMatch.id];
    }

    this.getMostCompatible = function (survey) {
        //Return a compatibility object based on a surevey results array
        return compareSurveys(survey);
    }
}

function getMostCompatible(survey) {
    //Return a compatibility object based on a surevey results array
    return compareSurveys(survey);
}

//Return a compatibility object for simplicity the id will be considered to be the corresponding index on the array
function compareSurveys(survey) {
    var machingId = -1;
    var minDiff = 40;
    for (let i = 0; i < friends.length; i++) {
        var diff = 0;
        var temp = 0;
        for (let index = 0; index < friends[i].survey.length; index++) {
            temp = friends[i].survey[index] - survey[index];
            diff += (temp > 0) ? temp : (temp * -1);
        }

        if (minDiff > diff) {
            minDiff = diff;
            machingId = i;
        }
    }

    return {
        id: machingId,
        percentage: (((50 - minDiff) / 50) * 100)
    }
}

module.exports = friendsData;