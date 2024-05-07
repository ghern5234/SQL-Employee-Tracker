const viewAllDepartments = (data) => {
    pool.query('SELECT * FROM FROM departments', function(err, {rows}) {
        console.log(rows)
    })
};

const viewAllRolls = (data) => {
    pool.query('SELECT * FROM roles', function(err, {rows}) {
        console.log(rows)
    })
}

const viewAllEmployees = (data) => {
    pool.query('SELECT * FROM FROM employees', function(err, {rows}) {
        console.log(rows)
    })
};


modules.export = { viewAllDepartments, viewAllRolls, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRoll }