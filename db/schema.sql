DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees_db;

\c employees;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department INTEGER,
  FOREIGN KEY (department) REFERENCES departments(id) ON DELETE SET NULL
);

