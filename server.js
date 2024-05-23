const inquirer = require("inquirer");
const { Pool } = require("pg"); // npm package that connects postgres
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
} = require("./text.js");
const {
  newDepartment,
  newRole,
  newEmployee,
  employeeRoleUpdate,
} = require("./answer-functions.js");

// Connects to our database
const pool = new Pool({
  user: "postgres",
  password: "1Harley!1",
  network: "locatlhost",
  database: "employees_db",
});

// Prompts user with choices for what they wish to do
function start() {
inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "View all departments.",
        "View all roles.",
        "View all employees.",
        "Add a new department.",
        "Add a new role.",
        "Add a new employee.",
        "Update an employee role.",
        "Quit."
      ],
    },
  ])
  // Then checks their answer and depending on their selection, it runs the corresponding function
  .then((userAnswers) => {
    let choiceList = userAnswers.action;
    switch (choiceList) {
      case "View all departments.":
        viewAllDepartments();
        break;
      case "View all roles.":
        viewAllRoles();
        break;
      case "View all employees.":
        viewAllEmployees();
        break;
      case "Add a new role.":
        newRole();
        break;
      case "Add a new employee.":
        newEmployee();
        break;
      case "Add a new department.":
        newDepartment();
        break;
      case "Update an employee role.":
        employeeRoleUpdate();
        break;
      case "Quit.":
        quit();
        break;
    }
  });
};

function quit() {
    console.log('Bye!')
    process.exit()
}

pool.connect();
start();
