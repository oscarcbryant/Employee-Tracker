const inquirer = require('inquirer');


const openSurvey = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'addons',
            message: "What would you like to do?",
            choices: ["View all Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"]
        }

    ])
}

const init = () => {
    openSurvey()
}

init();