const express = require('express')
const inquirer = require('inquirer')
const { Pool } = require('pg')
const {  viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRoll}

const app = express();
const PORT = process.env.PORT || 3001;
const pool = new Pool({
    user: '',
    password: '',
    network: 'locatlhost',
    database: '',
});

inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View all departments.', 'View all roles.', 'View all employees', 'Add a department.', 'Add a role.', 'Add an employee.', 'Update an employee role.'],

    }
])
.then((answers) => {
    if(answers.action == 'View all departments.') {
        viewAllEmployees();
    }
    if(answers.action == "View all roles.") {

    }

})
    


pool.connect();


app.listen(PORT, () => {
    console.log('Success!')
});




