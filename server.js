const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dashboard", {useNewUrlParser: true, useUnifiedTopology: true})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const UserDB = require('./schema/User');

app.post("/user", async (req, res) => {
  const newUserData = req.body;
  try {
    const newUserDoc = await UserDB.create(newUserData); 
    res.status(200).json(newUserDoc)
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Something is wrong"});
  }
})

//TODO: write route for create task and getting user infomation, with population
//TODO: write validator for checking login (if req.user exist), for creating user, for creating task
const TaskDB = require("./schema/Task.js")

app.post("/task", async (req, res) => {
  const newTaskData = {
    user : req.user._id,
    body : req.body,
  }

  try {
    const newTaskDoc = await TaskDB.create(newTaskData);
    res.json(newTaskDoc);
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, error: err.message});
  }
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
