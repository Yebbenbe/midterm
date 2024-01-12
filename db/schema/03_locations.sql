DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE "locations" (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  -- point coordinates
  latitude FLOAT,
  longitude FLOAT,
  -- infobox image
  image_url TEXT
);
