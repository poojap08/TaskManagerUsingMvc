const express = require("express");
const app = require("./src/app"); // Importing app from app.js
const port = 3000;
console.log(app);

app.listen(port, () => {
    console.log(`Task Manager running at http://localhost:${port}`);
});
