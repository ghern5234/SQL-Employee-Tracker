const inquirer = require('inquirer')
const { addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./text')

function newDepartment(){
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'name',
        }
    ])
    .then ((data) => {
        addDepartment(data);
    })
}

function newRole(){
    inquirer.prompt ([
        {
            type: 'input',
            message: 'What is the new role?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'What is the departments new role id?',
            name: 'department_id',
        }
    ])
    .then ((data) => {
        addRole(data);
});
}

function newEmployee(){
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter the new employee first name.',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'Please enter the new employee last name.',
            name: 'last_name',
        },
        {
            type: 'input',
            message: 'Please enter their new role id.',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'Please enter the id of their manager.',
            name: 'manager_id',
        }
    ])
    .then((data) => {
      addEmployee(data);
    })
}

function employeeRoleUpdate(){
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter the role id of the employee you wish to update.',
            name: 'employee_update',
        },
        {
            type: 'input',
            message: 'Please enter their new role.',
            name: 'role_update',
        },
    ])
    .then((data) => {
        updateEmployeeRole(data)
    })
}

module.exports = { newDepartment, newRole, newEmployee, employeeRoleUpdate }