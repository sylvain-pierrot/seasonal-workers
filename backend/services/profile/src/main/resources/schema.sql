DROP TABLE IF EXISTS "workers";

CREATE TABLE IF NOT EXISTS "workers" (
    id  VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    gender VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    nationality VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cv_path VARCHAR(255),
    picture_path VARCHAR(255),
    last_auth DATE DEFAULT CURRENT_DATE,
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);
