/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("debug", true);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const UserDB = require("./schema/User");

app.post("/user", async (req, res) => {
  const newUserData = req.body;
  try {
    const newUserDoc = await UserDB.create(newUserData);
    res.status(200).json(newUserDoc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Something is wrong" });
  }
});

//TODO: write route for create task and getting user infomation, with population
//TODO: write validator for checking login (if req.user exist), for creating user, for creating task
const TaskDB = require("./schema/Task.js");

app.post("/task", async (req, res) => {
  const userId = mongoose.mongo.ObjectID(req.body.user);
  const newTaskData = {
    user: userId,
    body: req.body.body
  };

  try {
    const userDoc = await UserDB.findOne({ _id: req.body.user });
    if (userDoc) {
      const newTaskDoc = await TaskDB.create(newTaskData);
      const newTaskId = newTaskDoc._id;

      userDoc.tasks = [...userDoc.tasks, newTaskId];
      await userDoc.save();

      const populatedUserDoc = await userDoc.populate("tasks").execPopulate();
      res.status(200).json(populatedUserDoc);
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put("/task/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const { body, done } = req.body;

  try {
    const taskDoc = await TaskDB.findOne({ _id: taskId });
    if (taskDoc) {
      taskDoc.body = typeof body !== "undefined" ? body : taskDoc.body;
      taskDoc.done = typeof done !== "undefined" ? done : taskDoc.done;
      await taskDoc.save();

      res.status(200).json(taskDoc);
    } else {
      throw new Error("Task not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete("/task/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const deleteResult = await TaskDB.deleteOne({ _id: taskId });
    if (deleteResult.n === 0) {
      throw new Error("Can't find document");
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
