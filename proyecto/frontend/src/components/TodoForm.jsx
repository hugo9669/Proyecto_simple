import React, { useState } from "react";

function TodoForm({ agregarTarea }) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim()) {
      agregarTarea(titulo);
      setTitulo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nueva tarea"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px", background: "blue", color: "white" }}>
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;
