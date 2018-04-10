CREATE TABLE general_topic (
    id SERIAL PRIMARY KEY,
    general_title VARCHAR(255),
    CONSTRAINT title_unique UNIQUE (general_title)
);

CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    topic_title VARCHAR(255),
    general_topic_id INTEGER REFERENCES general_topic (id),
    CONSTRAINT topic_title_unique UNIQUE (topic_title)
);

CREATE TABLE sub_topic (
    id SERIAL PRIMARY KEY,
    sub_title VARCHAR(255)
);

CREATE TABLE resource (
    id SERIAL PRIMARY KEY,
    resource_title VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    date_added TIMESTAMP,
    CONSTRAINT link_unique UNIQUE (link)
);

CREATE TABLE resource_topic_sub_topic_link (
    id SERIAL PRIMARY KEY,
    topic_id INTEGER REFERENCES topic (id),
    sub_topic_id INTEGER REFERENCES sub_topic (id),
    resource_id INTEGER REFERENCES resource (id)
);


-- general_topics -> topics -> subtopics -> resources
