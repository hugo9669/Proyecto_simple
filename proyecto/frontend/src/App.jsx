import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [tareas, setTareas] = useState([]);

  // Obtener tareas del backend
  useEffect(() => {
    fetch("http://localhost:4000/api/tareas")
      .then(res => res.json())
      .then(data => setTareas(data));
  }, []);

  // Agregar tarea
  const agregarTarea = async (titulo) => {
    const res = await fetch("http://localhost:4000/api/tareas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo }),
    });
    const nueva = await res.json();
    setTareas([...tareas, nueva]);
  };

  // Toggle completada
  const toggleTarea = async (id) => {
    const res = await fetch(`http://localhost:4000/api/tareas/${id}`, { method: "PUT" });
    const actualizada = await res.json();
    setTareas(tareas.map(t => t.id === id ? actualizada : t));
  };

  // Eliminar tarea
  const eliminarTarea = async (id) => {
    await fetch(`http://localhost:4000/api/tareas/${id}`, { method: "DELETE" });
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📋 Lista de Tareas</h1>
      <TodoForm agregarTarea={agregarTarea} />
      <TodoList tareas={tareas} toggleTarea={toggleTarea} eliminarTarea={eliminarTarea} />
    </div>
  );
}

export default App;