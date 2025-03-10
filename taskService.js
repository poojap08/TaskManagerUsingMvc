const Task = require("../models/taskModel");

let tasks = []; // In-memory task list
let taskId = 1; // Task ID counter

class TaskService {
    static getAllTasks() {
        return tasks;
    }

    static getTaskById(id) {
        return tasks.find(task => task.id === id);
    }

    static createTask(title, description) {
        const task = new Task(taskId++, title, description);
        tasks.push(task);
        return task;
    }

    static deleteTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index === -1) return null;
        return tasks.splice(index, 1)[0];
    }

    static markTaskComplete(id) {
        const task = this.getTaskById(id);
        if (!task) return null;
        task.completed = true;
        return task;
    }
}

module.exports = TaskService;
