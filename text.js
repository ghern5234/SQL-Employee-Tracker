// The 'Pool' class is a clieng library of the Node postgres package. 
// It provides a connection pool for managing multiple connections to a PostrgesSQL database within a Node.js application.
// Instead of opening and closing a new connection for each database operaton, the pool maintains a set of open connections that can be reused.
const { Pool } = require('pg'); // Import the Pool class from the 'pg' package

// Create a new instance of Pool for managing database connections
const pool = new Pool({
    user: 'postgres', // Database user
    password: '1Harley!1', // Database password
    network: 'localhost', // Network configuration 
    database: 'employees_db', // Database name
});

// Function to view all departments in the database
const viewAllDepartments = () => {
    pool.query('SELECT * FROM department', function(err, {rows}) { // Query the 'department' table to retrieve all rows
        console.table(rows) // Log the results as a table in the console
    })
};

// Function to view all roles in the database
const viewAllRoles = () => {
    pool.query('SELECT * FROM role', function(err, {rows}) { // Query the 'role' table to retrieve all rows
        console.table(rows) // Log the results as a table in the console
    })
}

// Function to view all employees in the database
const viewAllEmployees = (data) => {
    pool.query('SELECT * FROM employee', function(err, {rows}) { // Query the 'employee' table to retrieve all rows
        console.table(rows) // Log the results as a table in the console
    })
};

// Function to add a new department to the database
const addDepartment = (departmentName) => {
    // Insert a new row into the 'department' table. It specifies the colum names ('name') and uses parameterized values to prevent SQL injection attacks.
    // The $1 placeholder represents the first parameter in the vvalues array
    // The [newDepartment.name] array contains the values to be inserted into the query. In this case it is a single element represnting the name of the new department. This helps prevent SQL injection by sperating the SQL code from the data.
    // The err function is a callback function that is executed after the query is completed.
    // The err parameter contains information about any errors that occurred during execution
    // The {rows} is an object destructuring syntax in js that extracts the rows property from the result object returned by the query.
    pool.query('INSERT INTO department (name) VALUES ($1)', [departmentName], function(err, {rows}) { 
        
        if (err) {
            console.error(err)
        } else {
            viewAllDepartments();
            start();
        }
    })
};

//
const addRole = (newRole) => {
    const { title, salary, department_id } = newRole;
    pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id], function(err, res) {
        
        if (err) {
            console.error(err)
        } else {
            viewAllRoles();
            // start();
        }
    })
};

const addEmployee = (newEmployee) => {
    const { first_name, last_name, role_id, manager_id } = newEmployee;
    pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id], function(err, {rows}) {
        
        if (err) {
            console.error(err)
        } else {
            viewAllEmployees();
            start();
        }
    })
};

const updateEmployeeRole = (employeeRoleUpdate) => {
    const {employee_update, role_update } = employeeRoleUpdate
    pool.query('UPDATE FROM employee SET id = $1 AND INSERT $2', [employee_update, role_update], function(err, {rows}) {
        if (err) {
            console.error(err)
        } else {
            viewAllEmployees();
            start();
        }
    })
};


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }