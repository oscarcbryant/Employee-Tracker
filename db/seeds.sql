USE company_db;

INSERT INTO departments (id, department_name)
VALUES  (1, "Finance"),
        (2, "Sales"),
        (3, "Solutions Engineering"),
        (4, "Legal");

INSERT INTO roles (title, salary, department_id)
    VALUES      ("CFO", 100000, 1),
                ("Financial Controller", 65000, 1),
                ("Chief Sales Director", 70000, 2),
                ("Sales Manager", 60000, 2),
                ("Pre-Sales Director", 65000, 3),
                ("Solutions Engineer", 55000, 3),
                ("Chief Legal Council", 70000, 4),
                ("General Council", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("Brian", "Lara", 1, NULL),
            ("Michael", "Clarke", 2, NULL),
            ("Stephen", "Fleming", 3, NULL),
            ("Rahul", "Dravid", 4, NULL),
            ("Wasim", "Akram", 5, NULL),
            ("Graeme", "Smith", 6, NULL),
            ("Angelo", "Matthews", 7, NULL),
            ("Andrew", "Flintoff", 8, NULL);