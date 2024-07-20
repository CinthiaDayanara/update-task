const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Ruta para actualizar una tarea
router.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;

    // Buscar y actualizar la tarea
    const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json({
      message: 'Tarea actualizada exitosamente',
      task: updatedTask
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea', details: error.message });
  }
});

module.exports = router;
