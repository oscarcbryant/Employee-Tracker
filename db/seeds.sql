INSERT INTO departments (id, dept_name)
VALUES  (1, "Finance"),
        (2, "Sales"),
        (3, "Solutions Engineering"),
        (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
    VALUES      (1, "CFO", 100000, 1),
                (2, "Financial Controller", 65000, 1),
                (3, "Chief Sales Director", 70000, 2),
                (4, "Sales Manager", 60000, 2),
                (5, "Pre-Sales Director", 65000, 3),
                (6, "Solutions Engineer", 55000, 3),
                (7, "Chief Legal Council", 70000, 4),
                (8, "General Council", 70000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES  (1, "Brian", "Lara", 1, NULL)
            (1, "Michael", "Clarke", 1, NULL)
            (1, "Stephen", "Fleming", 1, NULL)
            (1, "Rahul", "Dravid", 1, NULL)
            (1, "Wasim", "Akram", 1, NULL)
            (1, "Graeme", "Smith", 1, NULL)
            (1, "Angelo", "Matthews", 1, NULL)
            (1, "Andrew", "Flintoff", 1, NULL)