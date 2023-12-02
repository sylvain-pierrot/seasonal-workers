CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TYPE JOB_STATUS CASCADE;
DROP TYPE BENEFIT CASCADE;
DROP TYPE AD_TYPE CASCADE;
DROP TYPE CURRENCY CASCADE;


CREATE TYPE JOB_STATUS AS ENUM ('OPEN', 'CLOSED', 'DELETED');
CREATE TYPE BENEFIT AS ENUM ('CAR', 'LAPTOP', 'PHONE', 'BONUS', 'PENSION', 'HEALTH_INSURANCE', 'OTHER');
CREATE TYPE AD_TYPE AS ENUM ('JOB_OFFER', 'AVAILABILITY', 'OTHER');
CREATE TYPE CURRENCY AS ENUM ('EUR', 'USD', 'GBP', 'CHF', 'JPY', 'CNY', 'CAD', 'AUD', 'NZD', 'SEK', 'NOK', 'DKK', 'RUB', 'INR', 'BRL', 'HKD', 'SGD', 'KRW', 'ZAR', 'TRY', 'HUF', 'PLN', 'CZK', 'ILS', 'MXN', 'THB', 'IDR', 'MYR', 'PHP', 'TWD');


CREATE TABLE IF NOT EXISTS "ads" (
    ad_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    job_id VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    salary INTEGER NOT NULL,
    currency CURRENCY NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    ad_type AD_TYPE NOT NULL, -- Job offer, Availibility, ...
    address_id VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "job_offer_status" (
    job_offer_status_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ad_id UUID,
    status JOB_STATUS NOT NULL,
    FOREIGN KEY (ad_id) REFERENCES ads(ad_id)
);

CREATE TABLE IF NOT EXISTS "ad_benefit" (
    ad_id UUID,
    benefit_name BENEFIT,
    PRIMARY KEY (ad_id, benefit_name),
    FOREIGN KEY (ad_id) REFERENCES ads(ad_id)
);


