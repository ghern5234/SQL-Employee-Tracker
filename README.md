# SQL: Employee Tracker


## Description

Welcome to SQL: Employee Tracker! This project is a command-line application to manage a company's employee database, utilizing Node.js, Inquirer, and PostgreSQL. The application serves as a Content Management System (CMS), enabling non-developers to easily view and interact with the stored information.
This project aims to provide a simple and effective solution for managing a company's employee information, enhancing organizational capabilities and planning processes.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Features

- Command-Line Interface (CLI): Allows users to interact with the database through various prompts and commands.
- Inquirer Integration: Uses the Inquirer package (version 8.2.4) to handle user input and navigate through the application options.
- Database Management: Connect to and manage the employee database using PostgreSQL.
- Persistent Data Storage: Uses PostgreSQL to store all data persistently, ensuring data integrity and availability.


## Installation

- Clone the repo to your device using `git clone` followed by the repo link.

- Ensure you have Node.js and PostgresSQL installed on your machine. 

- Install the dependencies by running the `npm i` command in your terminal.

- Create a .env file in the root directory of the project and add your PostgresSQL connection details:
`DB_NAME='your_database_name'`
`DB_USER='your_postgresql_username'`
`DB_PASSWORD='your_postgresql_password'`
`DB_HOST='localhost'`
`DB_PORT=3001`

- Set Up the database by logging into postgres on the terminal and running `\i db/schema.sql;`. (If you wish to see example data, run the `node db/seeds.sql` command.) 

- Exit out of postgres and start the application by using `node index.js`.

- Once the server is running, you can use the command-line interface to interact with the employee tracker and perform various operations such as viewing departments, roles, employees, adding new departments, roles, employees, and updating employee roles.



## Usage

- View All Departments: Display a list of all departments with corresponding department IDs in a formatted table.

- View All Roles: List all job roles with details including role ID, job title, associated department, and salary.

- View All Employees: Show a comprehensive table of employee information, including employee IDs, first names, last names, job titles, departments, salaries, and their managers.

- Add Department: Enter a new department name, and add the new department to the database.

- Add Role: Create a new job role by entering the role name, salary, and the department it belongs to, and add this role to the database.

- Add Employee: Enable the addition of a new employee by providing their first name, last name, role, and manager. The new employee is then added to the database.

- Update Employee Role: Facilitate updating an existing employee’s role by selecting the employee and their new role from a list, and update this information in the database.

- Real-Time Data Management: Allows for real-time addition, viewing, and updating of data, providing immediate feedback and updates to the user.

- For a visual demonstration, please refer to the [tutorial video](https://drive.google.com/file/d/1SBg8336SW4sdEkSXoqRVzBZ4hSvWqqNg/view?usp=drive_link).



## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
- Fork the repository.
- Create a new branch for your changes.
- Commit your changes with a descriptive message.
- Submit a pull request.


## License

[MIT]((https://opensource.org/licenses/MIT)) 

Please refer to the [LICENSE](./LICENSE) file for more licensing information.



