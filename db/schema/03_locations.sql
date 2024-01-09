DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE "locations" (
  "id" integer PRIMARY KEY,
  "map_id" integer,
  "title" text,
  "description" text,
  "latitude" float,
  "longitude" float,
  "image_url" text
);

ALTER TABLE "locations" ADD FOREIGN KEY ("map_id") REFERENCES "maps" ("id");