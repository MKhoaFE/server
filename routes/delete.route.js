const express = require('express');
const router = express.Router();

// Danh sách tasks (tạm thời lưu trong biến global)
let tasks = [];

// Route để xóa task
router.delete('/deleteTask/:id', (req, res) => {
  const { id } = req.params;

  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Không tìm thấy task để xóa' });
  }

  tasks.splice(index, 1);
  return res.status(200).json({ message: 'Task đã được xóa thành công' });
});

module.exports = router;
