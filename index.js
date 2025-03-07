const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.json());

let tasks = [];
let taskId = 1;

// Add a new task
app.post("/new", (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const task = { id: taskId++, title, description: description || "", completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Get a specific task by ID
app.get("/task/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
});

app.listen(port, () => {
    console.log(`Task Manager running at http://localhost:${port}`);
});
