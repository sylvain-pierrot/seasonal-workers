DROP TABLE IF EXISTS "workers";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "workers" (
    id  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    kc_id VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    gender VARCHAR(255) NOT NULL,
    birth_date VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);
    -- cv_path VARCHAR(255),
    -- picture_path VARCHAR(255),
