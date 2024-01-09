-- Drop and recreate Users table (Example) - test
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "name" text,
  "email" text,
  "password" text
);