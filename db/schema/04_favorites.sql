-- favorites example data 
DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE "favorites" (
  "id" integer,
  "user_id" integer,
  "map_id" integer
);

ALTER TABLE "favorites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favorites" ADD FOREIGN KEY ("map_id") REFERENCES "maps" ("id");
