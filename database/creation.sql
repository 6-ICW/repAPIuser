-- SQLite
-- create table rights (
--     rightID INTEGER PRIMARY KEY,
--     name TEXT NOT NULL UNIQUE
-- );

-- create table userRight (
--     userRightID INTEGER PRIMARY KEY,
--     userID INTEGER NOT NULL,
--     rightID INTEGER NOT NULL
-- );

-- create table users (
--     userID INTEGER PRIMARY KEY,
--     email TEXT NOT NULL UNIQUE,
--     wachtwoord TEXT NOT NULL,
--     nickName TEXT NOT NULL
-- )

-- insert into users (email, wachtwoord, nickName) VALUES
-- ('test@gmail.com','test123','test')

-- insert into rights(name) values ("lezen");
-- insert into rights(name) values ("schrijven");
-- insert into rights(name) values ("admin");

-- insert into userRight (userID, rightID) values (1,3);
-- insert into userRight (userID, rightID) values (2,1);

-- CREATE UNIQUE INDEX ux_nickName ON users(nickName);

-- insert into users (email, wachtwoord, nickName) VALUES
-- ('test1@gmail.com','test123','test2')

-- CREATE VIEW userRights_V AS
-- select users.email, users.nickName, rights.name from userRight 
-- join users on users.userID = userRight.userID
-- join rights on userRight.rightID = rights.rightID;
