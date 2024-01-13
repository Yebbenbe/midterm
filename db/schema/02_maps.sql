DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE "maps" (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  image TEXT
  -- centerpoint coordinates
  center_lat float,
  center_long float,
  -- zoom from centerpoint
  zoom_level integer
);

