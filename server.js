const inquirer = require('inquirer')
const { Pool } = require('pg') // npm package that connects postgres
const {  viewAllDepartments, viewAllRoles, viewAllEmployees } = require('./text.js');
const { newDepartment, newRole, newEmployee, employeeRoleUpdate } = require('./answer-functions.js');

// Connects to our database
const pool = new Pool({
    user: 'postgres',
    password: '1Harley!1',
    network: 'locatlhost',
    database: 'employees_db',
});

// Prompts user with choices for what they wish to do
inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: [
            {
              name: 'View all departments.',
              value: 'View all departments.'
            }, 
            {
                name: 'View all roles.',
                value: 'View all roles.'
            }, 
            { 
                name: 'View all employees',
                value:'View all employees.'
            },
            { 
                name: 'Add a new department.',
                value: 'Add a new department.'
            },
            {
                name: 'Add a new role.',
                value: 'Add a new role.'
            },
            { 
                name: 'Add a new employee.',
                value:'Add a new employee.'
            },
            { 
                name: 'Update an employee role.',
                value: 'Update an employee role.'
            }],

    }
])
// Then checks their answer and depending on their selection, it runs the corresponding function
.then((answers) => {
    switch (answers){
        case answers.action == 'View all departments.':
            viewAllDepartments();
            break
        case answers.action == "View all roles.":
            viewAllRoles();
            break
        case answers.action == "View all employees.":
            viewAllEmployees();
            break
        case answers.action == "Add a new role.":
            newRole();
            break
        case answers.action == 'Add a new employee.':
            newEmployee();
            break
        case answers.action == 'Add a new department.':
            newDepartment();
            break
        case answers.action == 'Update an employee role.':
            employeeRoleUpdate();
    }
    

})


    


pool.connect();






