import React from "react";

function TodoList({ tareas, toggleTarea, eliminarTarea }) {
  return (
    <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
      {tareas.map((t) => (
        <li key={t.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span
            onClick={() => toggleTarea(t.id)}
            style={{
              textDecoration: t.completada ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {t.titulo}
          </span>
          <button
            onClick={() => eliminarTarea(t.id)}
            style={{ background: "red", color: "white", padding: "5px" }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
