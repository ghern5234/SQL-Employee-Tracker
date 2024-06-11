const inquirer = require('inquirer');
const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres', // Database user
    password: '1Harley!1', // Database password
    network: 'localhost', // Network configuration 
    database: 'employees_db', // Database name
});

async function newDepartment(){
    
        const answers = await inquirer.prompt ([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'name',
            }
        ]);

        return answers.name;

}

async function newRole(){
    const data = await pool.query('SELECT * FROM department')
    console.log(data.rows)

    const choices = data.rows.map(function (dept){
        return { 
            name: dept.name,
            value: dept.id,
         }
    })

    
    const answers = await inquirer.prompt ([
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
            type: 'list',
            message: 'Which department is it under?',
            name: 'department_name',
            choices: choices
        }
    ])
    return {title: answers.title, salary: answers.salary, department_id: answers.department_name}
};

async function newEmployee(){
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
            message: 'Please enter the employee id of the employee you wish to update.',
            name: 'employee_update',
        },
        {
            type: 'input',
            message: 'Please enter the role id of their new role.',
            name: 'role_update',
        },
    ])
    .then((data) => {
        updateEmployeeRole(data)
    })
}

module.exports = { newDepartment, newRole, newEmployee, employeeRoleUpdate }