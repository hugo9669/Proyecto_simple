-- Crear base de datos y usarla (por si el contenedor no la crea)
CREATE DATABASE IF NOT EXISTS tareas_db CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE tareas_db;

-- Tabla de tareas
CREATE TABLE IF NOT EXISTS tareas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  completada TINYINT(1) NOT NULL DEFAULT 0,
  creada_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizada_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_completada (completada)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_spanish_ci;



