// Requiring necessary npm packages
var path = require('path');
var express = require('express');
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require('./config/passport');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require('./models');

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                              Routes                               //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const users = require('./routes/users.js');
app.use(users);
const members = require('./routes/members.js');
app.use(members);
const individuals = require('./routes/individuals.js');
app.use(individuals);
const band = require('./routes/band.js');
app.use(band);
const lookingForGroup = require('./routes/lookingForGroups.js');
app.use(lookingForGroup);
const lookingForMore = require('./routes/lookingForMore.js');
app.use(lookingForMore);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//              This portion has been updated slightly               //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// this now points to a build folder that is created from the script
// npm run build
app.use(express.static(path.join(__dirname, '../client/build')));

// also check out the html-routes file, this is where some more react
// changes will need to be made.
const htmlRoutes = require('./routes/html-routes.js');
app.use(htmlRoutes);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//                    END slightly changed portion                   //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
