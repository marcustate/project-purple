// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // Creates a new Thread in the database. This should occur when the user enters information in the new-thread.html page.
  app.post("/api/new/thread", (req, res) => {
    const { title, body } = req.body;
    db.Thread.create({ title, body }).then(function(newThread) {
      res.json(newThread);
    });
  });
  // Gets all threads in the database and orders them by descending id. This is the list of threads that should populate on members.html page
  app.get("/threads", (req, res) => {
    db.Thread.findAll({
      order: [["createdAt", "DESC"]]
    })
      .then(threads => {
        res.json(threads);
      })
      .catch(err => {
        throw new Error(err);
      });
  });
  // Get a single thread by id from the database. This should occur when the user clicks a specific thread in the list of all threads on members.html page
  app.get("/thread/:id", (req, res) => {
    db.Thread.findByPk(req.params.id).then(thread => {
      res.json(thread);
    });
  });
  app.post("/api/new/message", (req, res) => {
    const { body } = req.body;
    db.Message.create({ body })
      .then(newMessage => {
        res.json(newMessage);
      })
      .catch(err => {
        throw new Error(err);
      });
  });
  // Get all messages in a thread.
  app.get("/messages", (req, res) => {
    db.Message.findAll({}).then(messages => {
      res.json(messages);
    });
  });
};
