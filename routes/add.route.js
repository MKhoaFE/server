const express = require('express');
const router = express.Router();

// Danh sách tasks (tạm thời lưu trong biến global)
let tasks = [];

// Route để thêm task mới
router.post('/addTask', (req, res) => {
  const { id, nameOfTask } = req.body;

  if (!id || !nameOfTask) {
    return res.status(400).json({ message: 'Vui lòng cung cấp ID và tên task' });
  }

  const newTask = { id, nameOfTask };
  tasks.push(newTask);
  return res.status(201).json({ message: 'Task đã được thêm thành công', task: newTask });
});

module.exports = router;