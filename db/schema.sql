-- Drop the database if it already exists to ensure a clean slate
DROP DATABASE IF EXISTS employees_db;

-- Create a new databse named 'employees_db'
CREATE DATABASE employees_db;

-- Connect to the newly created 'employees_db' database
\c employees_db;


-- Create a table to store department information
CREATE TABLE department (
    id SERIAL PRIMARY KEY, -- Unique identifier for each department
    name VARCHAR(30) NOT NULL -- Name of the department, cannot be NULL
);

-- Create a table to store role information
CREATE TABLE role (
  id SERIAL PRIMARY KEY, -- Unique identifier for each role
  title VARCHAR(30) NOT NULL, -- Title of the role, cannot be NULL
  salary DECIMAL NOT NULL, -- Salary for the role, cannot be NULL
  department_id INTEGER NOT NULL, -- Ientifier for the department this role belongs to
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL -- Ensure department_id references a valid department, set to NULL if referenced department is deleted
 -- (what table we are referencing from: department_id )(what table we are referencing to / which field: department_id)
);

-- Create a table to store employee information
CREATE TABLE employee (
  id SERIAL PRIMARY KEY, -- Unique identifier for each role
  first_name VARCHAR(30) NOT NULL, -- Employee's first name, cannot be NULL
  last_name VARCHAR(30) NOT NULL, -- Employee's last name, cannot be NULL
  role_id INTEGER NOT NULL, -- Employee's identifier for the role, cannot be NULL
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL, -- Ensure role_id references a valid role
  manager_id INTEGER, -- Identifier for the manager of the employee
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL -- Ensure manager_id references a valid employee, set to NULL if referenced manager is deleted.
  
)