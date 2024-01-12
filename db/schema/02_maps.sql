DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE "maps" (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  latitude FLOAT,
  longitude FLOAT
);