CREATE TABLE general_topic (
    id SERIAL PRIMARY KEY,
    general_title VARCHAR(255),
    CONSTRAINT title_unique UNIQUE (title)
);

CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    topic_title VARCHAR(255),
    general_topic_id INTEGER REFERENCES general_topic (id),
    CONSTRAINT title_unique UNIQUE (title)
);

CREATE TABLE sub_topic (
    id SERIAL PRIMARY KEY,
    sub_title VARCHAR(255),
    topic_id INTEGER REFERENCES topic (id)
)

CREATE TABLE resource (
    id SERIAL PRIMARY KEY,
    resource_title VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    date_added TIMESTAMP,
    sub_topic_id INTEGER REFERENCES sub_topic (id),
    CONSTRAINT link_unique UNIQUE (link)
)

-- general_topics -> topics -> subtopics -> resources
