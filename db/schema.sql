DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

    CREATE TABLE departments (
        id INT NOT NULL,
        dept_name VARCHAR(30) NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE roles (
        id INT NOT NULL,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON DELETE SET NULL
    );

    CREATE TABLE employee (
        id INT NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL, 
        manager_id INT
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE SET NULL
    );
