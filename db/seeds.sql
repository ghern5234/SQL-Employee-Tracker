-- Set which database we are working with
\c employees_db;

-- Add data to table
INSERT INTO department (name)
VALUES ('Sales'),
('Advertising');


INSERT INTO role (title, salary, department_id)
VALUES ('Assistant Manager', 40000, 1),
('Human Resources', 30000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ben', 'Walters', 1, NULL),
('George', 'Hernandez', 2, 1),
('Andrea', 'Castro', 2, 1);