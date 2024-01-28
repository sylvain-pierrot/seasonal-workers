CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TYPE IF EXISTS ad_type_enum;
DROP TYPE IF EXISTS country_enum;
DROP TYPE IF EXISTS salaire_currency_enum;

CREATE TYPE ad_type_enum AS ENUM ('experience', 'availability');
CREATE TYPE country_enum AS ENUM ('france', 'germany', 'spain', 'italy', 'united_kingdom', 'united_states');
CREATE TYPE salaire_currency_enum AS ENUM ('EU', 'DOLLAR');

CREATE TABLE ad (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    title VARCHAR(255),
    category VARCHAR(255),
    sub_category VARCHAR(255),
    start_date DATE,
    end_date DATE,
    salary_amount NUMERIC,
    salary_currency salaire_currency_enum,
    city VARCHAR(255),
    zip_code VARCHAR(255),
    country country_enum,
    description VARCHAR(255),
    ad_type ad_type_enum
);
