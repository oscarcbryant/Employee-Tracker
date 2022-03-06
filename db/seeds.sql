USE company_db;

INSERT INTO departments (id, department_name)
VALUES  (1, "Finance"),
        (2, "Sales"),
        (3, "Solutions Engineering"),
        (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
    VALUES      (11, "CFO", 100000, 1),
                (12, "Financial Controller", 65000, 1),
                (13, "Chief Sales Director", 70000, 2),
                (14, "Sales Manager", 60000, 2),
                (15, "Pre-Sales Director", 65000, 3),
                (16, "Solutions Engineer", 55000, 3),
                (17, "Chief Legal Council", 70000, 4),
                (18, "General Council", 70000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES  (31, "Brian", "Lara", 1, NULL),
            (32, "Michael", "Clarke", 1, NULL),
            (33, "Stephen", "Fleming", 1, NULL),
            (34, "Rahul", "Dravid", 1, NULL),
            (35, "Wasim", "Akram", 1, NULL),
            (36, "Graeme", "Smith", 1, NULL),
            (37, "Angelo", "Matthews", 1, NULL),
            (38, "Andrew", "Flintoff", 1, NULL);