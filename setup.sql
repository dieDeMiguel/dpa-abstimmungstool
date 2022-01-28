CREATE TABLE images (
    id SERIAL primary key,
    author VARCHAR(255) NOT NULL,
    width INTEGER,
    height INTEGER,
    url VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    id SERIAL primary key,
    username VARCHAR(255) NOT NULL
);


CREATE TABLE votes (
    id SERIAL primary key,
    user_id INT REFERENCES users(id),
    image_id INT REFERENCES images(id)
);
