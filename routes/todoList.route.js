const express = require('express');
const router = express.Router();

// Danh sách tasks (tạm thời lưu trong biến global)
const tasks = [];

// Route để lấy danh sách task theo userID
router.get('/:userID/tasks', (req, res) => {
    const userID = req.params.userID;

    // Lấy danh sách tasks của người dùng dựa trên userID
    const userTasks = tasks.filter(task => task.userID === userID);
    res.json(userTasks);
});

module.exports = router;