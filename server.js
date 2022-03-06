const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');
const cTable = require("console.table");

const openSurvey = () => {

   

    inquirer.prompt ([
        {
            type: 'list',
            name: 'action',
            message: "What would you like to do?",
            choices: [  "View all Employees", 
                        "Add Employee", 
                        "Update Employee Role", 
                        "View all Roles", 
                        "Add Role", 
                        "View All Departments", 
                        "Add Department"]
        }
    ])    
    .then(answer => {
        console.log(answer);

        switch (answer.action) {

            case "View All Departments":
                showDepartments()
                break;
        
            case "View all Roles":
                showRoles()
                break;

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
    },function () {

        console.log('Connected to company_db database')
    })

const showDepartments = async () => {

    // const db = connect();

    db.query(`Select * from departments`, function (error, results) {

        //console.log(results);
        console.table(results);
        openSurvey();
    });
};

const showRoles = async () => {

    // const db = connect();

    db.query(`Select * from roles`, function (error, results) {

        //console.log(results);
        console.table(results);
        openSurvey();
    });
};

const showEmployees = async () => {

    // const db = connect();

    db.query(`Select * from employee`, function (error, results) {

        //console.log(results);
        console.table(results);
        openSurvey();
    });
};

const init = () => {
    console.log(`
    ___   _____   ___   __   ______  
   / __| |     | |   |_|  | |      | 
  | |    |     | |        | |      |  
  | |    |  O  | |        | |   ___| 
  | |__  |     | |   ||   | |  |    
  |____| |_____| |___||___| |__|   
   _____   __     _     _____
  |     | |  |  |  |   |   __|
  |     | |  |__|  |   |   |  
  |  O  | |  _     |   |   __|
  |     | | | |    |   |  |__
  |_____| |_| |____|   |_____|
  
  `)
    openSurvey()

}

init();