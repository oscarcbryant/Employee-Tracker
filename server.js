const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');
const cTable = require("console.table");

const openSurvey = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'company',
            message: "What would you like to do?",
            choices: ["View all Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"]
        }
    ])
    
    .then(answer => {
        switch (answer.choices) {
            case "View all Employees":
                showEmployees()
                break;
}}
    )};


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log('Connected to company_db database')
);

db.query('Select * from departments', function(err, results) {
    console.log(results);
});

const showEmployees = () => {

    console.log(
        db.query(`Show employees from role_id`, (err, result) => {}
        )
    )
};

const init = () => {
    openSurvey()
    .then((answers) = {})
}

init();