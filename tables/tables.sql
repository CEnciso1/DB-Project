CREATE DATABASE `books`;

CREATE TABLE `books` (
    `bookId` INT NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(25) NOT NULL,
    `title` VARCHAR(250) NULL,
    `createdAt` DATETIME NULL,
    `updatedAT` DATETIME NULL,
    PRIMARY KEY (`bookId`)
);

CREATE TABLE `book_authors` (
    `book_authorId` INT NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(25) NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAT` DATETIME NULL,
    PRIMARY KEY (`book_authorId`)
);

CREATE TABLE `authors` (
    `authorId` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAT` DATETIME NULL,
    PRIMARY KEY (`authorId`)
);

CREATE TABLE `borrowers` (
    `borrowerId` INT NOT NULL,
    `Card_Id` VARCHAR(50) NOT NULL,
    `ssn` VARCHAR(25) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `address` VARCHAR(250) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `state` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME NULL,
    `updatedAT` DATETIME NULL,
    PRIMARY KEY (`Card_Id`)
);

CREATE TABLE `book_loans`(
    `loan_id` INT NOT NULL AUTO_INCREMENT,
    `bookid` Int,
     `Isbn` VARCHAR(25) NOT NULL,
     `cardId` VARCHAR(50) NOT NULL,
     `Date_out` DATE NOT NULL,
     `Date_due` DATE NOT NULL,
     `Date_in` DATE,
     PRIMARY KEY (Loan_id),
     FOREIGN KEY (bookId, Isbn) REFERENCES BOOKs(bookid, Isbn),
     FOREIGN KEY (Card_id) REFERENCES BORROWERs(Card_id)
)