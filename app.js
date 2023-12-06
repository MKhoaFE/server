const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Sử dụng body-parser middleware
app.use(bodyParser.json());


const users = [];
const tasks = [];


// Sử dụng các route tương ứng
const addRoute = require('./routes/add.route');
const deleteRoute = require('./routes/delete.route');
const tasksRoute = require('./routes/todoList.route');

app.use('/tasks', addRoute);
app.use('/tasks', deleteRoute);
app.use('/tasks', tasksRoute);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});