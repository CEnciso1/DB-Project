import express, { Router } from 'express';
import BooksController from './controller';

const booksRoutes: Router = express.Router();

//* Books *//
booksRoutes.get('/:bookName', BooksController.getBooksByName); //Returns book data
booksRoutes.get('/cardid/:cardId', BooksController.insertLoan);    //Inserts into book_loan table

export default booksRoutes;


