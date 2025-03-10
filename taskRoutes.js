const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/new", taskController.createTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id", taskController.markTaskComplete);

module.exports = router;
