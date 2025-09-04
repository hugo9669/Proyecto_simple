const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let tareas = [];
let id = 1;

// Rutas API
app.get("/api/tareas", (req, res) => {
  res.json(tareas);
});

app.post("/api/tareas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: "El título es obligatorio" });
  }
  const nuevaTarea = { id: id++, titulo, completada: false };
  tareas.push(nuevaTarea);
  res.json(nuevaTarea);
});

app.put("/api/tareas/:id", (req, res) => {
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));
  if (!tarea) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  tarea.completada = !tarea.completada;
  res.json(tarea);
});

app.delete("/api/tareas/:id", (req, res) => {
  tareas = tareas.filter(t => t.id !== parseInt(req.params.id));
  res.json({ mensaje: "Tarea eliminada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
