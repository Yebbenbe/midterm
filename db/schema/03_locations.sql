DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE "locations" (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  location_lat FLOAT,
  location_long FLOAT,
  image_url TEXT
);
