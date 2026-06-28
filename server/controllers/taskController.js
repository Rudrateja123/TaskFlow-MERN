const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one task
exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedTask)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};