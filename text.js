const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '1Harley!1',
    network: 'locatlhost',
    database: 'employees_db',
});
// .query ('query itself', call back function)
// function(err, results)
const viewAllDepartments = () => {
    pool.query('SELECT * FROM department', function(err, {rows}) {
        console.table(rows)
    })
};

const viewAllRoles = () => {
    pool.query('SELECT * FROM role', function(err, {rows}) {
        console.table(rows)
    })
}

const viewAllEmployees = (data) => {
    pool.query('SELECT * FROM employee', function(err, {rows}) {
        console.table(rows)
    })
};

const addDepartment = (newDepartment) => {
    pool.query('INSERT INTO department (name) VALUES ($1)', [newDepartment.name], function(err, {rows}) {
        console.table(rows)
    })
};
//insert into
const addRole = (newRole) => {
    const { title, salary, department_id } = newRole;
    pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id], function(err, {rows}) {
        console.table(rows)
    })
};

const addEmployee = (newEmployee) => {
    const { first_name, last_name, role_id, manager_id } = newEmployee;
    pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id], function(err, {rows}) {
        console.table(rows)
    })
};

const updateEmployeeRoll = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRoll }