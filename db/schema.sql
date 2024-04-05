-- Create the users table to store user information
DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;
-- USE user_db;

-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(50) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );

-- -- Create the skate_tricks table to store skateboard trick information
-- CREATE TABLE skate_tricks (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     trickName VARCHAR(100) NOT NULL
-- );

-- -- Create the user_skate_tricks table to store the relationship between users and skateboard tricks
-- CREATE TABLE user_skate_tricks (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     trick_id INT NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (trick_id) REFERENCES skate_tricks(id)
-- );