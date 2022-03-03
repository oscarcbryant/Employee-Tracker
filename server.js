const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');

const openSurvey = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'company',
            message: "What would you like to do?",
            choices: ["View all Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"]
        }

    ]).then(answer => {
        switch (answer.choices) {
            case "View all Employees":
                break;
            case 'Add Employee':
                break;
            case 'Update Employee Role':
                break;
            case 'View all Roles':
                break;
            case 'Add Role':
                break;
            case 'View All Departments':
                break;
            case 'Add Department':
                break;
        }
    })
}

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
);

const init = () => {
    openSurvey()
    .then((answers) = {})
}

init();

