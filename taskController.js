const TaskService = require("../services/taskService");

exports.getAllTasks = (req, res) => {
    res.json(TaskService.getAllTasks());
};

exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = TaskService.getTaskById(id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const task = TaskService.createTask(title, description);
    res.status(201).json(task);
};

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = TaskService.deleteTask(id);
    if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
};

exports.markTaskComplete = (req, res) => {
    const id = parseInt(req.params.id);
    const task = TaskService.markTaskComplete(id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task marked as completed", task });
};
