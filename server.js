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

            case "Add Department":
                addDepartment()
                break;

            case "Add Role":
                addRole()
                break;  
            
            case "Add Employee":
                addEmployee()
                break; 
}}
    )};


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'whistler1',
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

const addDepartment = async () => {

    return inquirer.prompt ([ 
        {
            type: 'input',
            message:'(Required) What is the name of the new Department?', 
            name: 'department_name',
        },
        ]).then((answer)=>{
            // console.log(answer);
            // console.log(answer.department_name);
                    // let department = answer.department_name;
                    // console.log(department);
                    db.execute(`INSERT INTO departments (department_name)
                                                            VALUES (?)`,[answer.department_name]);
                        console.info('Answer:', answer.department_name);
                        console.log(addDepartment);

                    });
}

const addRole = async () => {

    return inquirer.prompt ([ 
        {
            type: 'input',
            message:'(Required) What is the new role you are including?', 
            name: 'title',
        },
        {
            type: 'input',
            message:'(Required) Please enter the "salary" of the new Role?', 
            name: 'salary',
        },
        {
            type: 'input',
            message:'(Required) Please enter the department ID of the new Role?', 
            name: 'id',
        },
        ]).then (answer => {
            // console.log(answer);
            // let roletitle = answer.title;
            // console.log(roletitle);
            // let roleSalary = answer.salary;
            // let department_id = answer.id
            // console.log(roleSalary);
            db.execute(`INSERT INTO roles (title, salary, department_id)
                        VALUES (?, ?, ?)`,[answer.title, answer.salary, answer.id]);
                // console.info('Answer:', answer.title, answer.salary);
            // console.log(db);

        });
    }

    const addEmployee = async () => {
    
        return inquirer.prompt ([ 
            {
                type: 'input',
                message:'(Required) Please enter the First Name of the new employee?', 
                name: 'first_name',
            },
            {
                type: 'input',
                message:'(Required) Please enter the Last Name of the employee?', 
                name: 'last_name',
            },
            {
                type: 'input',
                message:'(Required) Please enter the Role ID of the employee?', 
                name: 'role_id',
            },        

            ]).then (answer => {
                db.execute(`INSERT INTO employee (role_id, first_name, last_name)
                            VALUES (?, ?, ?)`,[answer.role_id, answer.first_name, answer.last_name]);
    
            });
    }

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