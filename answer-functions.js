const inquirer = require('inquirer');
const pool = require('./connection.js')

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

    const data = await pool.query('SELECT * FROM employee')

    const choices = data.rows.map(function (employee){
        return { 
            name: employee.first_name + employee.last_name,
            value: employee.role_id,
         }
    })

    const roleData = await pool.query('SELECT * FROM role')

    const roleChoices = roleData.rows.map(function (role){
        return { 
            name: role.title,
            value: role.id,
         }
    })

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
            type: 'list',
            message: "Please select the new employee's role.",
            name: 'role_id',
            choices: roleChoices


        },
        {
            type: 'list',
            message: "Please select the new employee's manager.",
            name: 'manager_id',
            choices: choices
        }
    ])
    .then((data) => {
      addEmployee(data);
    return data
    })
}

async function employeeRoleUpdate(){
    const data = await pool.query('SELECT * FROM employee')

    const employeeChoices = data.rows.map(function (employee){
        return { 
            name: employee.first_name + employee.last_name,
            value: employee.role_id,
         }
    })

    const roleData = await pool.query('SELECT * FROM role')

    const roleChoices = roleData.rows.map(function (role){
        return { 
            name: role.title,
            value: role.id,
         }
    })

    inquirer.prompt ([
        {
            type: 'list',
            message: 'Please select the employee you wish to update.',
            name: 'employee_update',
            choices: employeeChoices
        },
        {
            type: 'list',
            message: 'Please select their new role.',
            name: 'role_update',
            choices: roleChoices
        },
    ])
    .then((data) => {
        updateEmployeeRole(data)
    })
}

module.exports = { newDepartment, newRole, newEmployee, employeeRoleUpdate }