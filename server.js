const inquirer = require('inquirer')
const { Pool } = require('pg') // npm package that connects postgres
const {  viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRoll} = require('./text.js')

// Connects to our database
const pool = new Pool({
    user: 'postgres',
    password: '1Harley!1',
    network: 'locatlhost',
    database: 'employees_db',
});

inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: [
            {
              name: 'View all departments.',
              value: ''
            }, 
            {
                'View all roles.'}, 'View all employees', 'Add a department.', 'Add a role.', 'Add an employee.', 'Update an employee role.'],

    }
])
.then((answers) => {
    


    if(answers.action == 'View all departments.') {
        viewAllDepartments();
    }
    if(answers.action == "View all roles.") {
       viewAllRoles();
    }
    if(answers.action == "View all roles.") {
        viewAllRoles
     }
     if(answers.action == "View all roles.") {
        viewAllRoles
     }

})
    


pool.connect();






