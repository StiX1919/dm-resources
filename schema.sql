CREATE TABLE resource (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    link UNIQUE VARCHAR(255),
    topic VARCHAR(55),
    date_added TIMESTAMP
)
