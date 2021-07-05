const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// Get back all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

// Submit a todo
router.post("/", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    _id: req.body._id,
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a todo
router.put("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.todoId, {
      text: req.body.text,
      completed: req.body.completed,
      _id: req.body._id,
    });
    res.send("Todo Updated!");
    // res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete a todo
router.delete("/:todoId", async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
