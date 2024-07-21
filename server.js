const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const app = express();
const port = 3003;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tasks_db', {

});


app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/api', taskRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
