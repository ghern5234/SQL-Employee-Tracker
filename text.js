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

const viewAllRolls = (data) => {
    pool.query('SELECT * FROM roles', function(err, {rows}) {
        console.table(rows)
    })
}

const viewAllEmployees = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};

const addDepartment = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};
//insert into
const addRole = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};

const addEmployee = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};

const updateEmployeeRoll = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};


module.exports = { viewAllDepartments, viewAllRolls, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRoll }