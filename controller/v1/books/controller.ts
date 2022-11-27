import { Request, Response } from 'express';
import _ from 'lodash';
import { execute } from "../../../utiles/mySqlDb";
import { BooksQueries } from "./queries";
import { Book } from './modal';
import { Loan } from './modal';

export default class BooksController {

    static async getBooksByName(req: Request, res: Response) {

        if (!req.params.bookName) {
            return res.status(200).json({ status: false, message: 'Send Valid Book Name', data: [] });
        }

        try {

            const books = await execute<Book>(BooksQueries.GetBooks, [req.params.bookName + '%']);

            return res.status(200).json({ status: true, message: 'Books List Found', data: books });

        } catch (error) {

            return res.status(200).json({ status: false, message: 'Internal Server error', data: [error] });
        }
    };

    static async insertLoan(req: Request, res: Response) {

        if (!req.params.cardId) {
            return res.status(200).json({ status: false, message: 'Send Valid Card Id', data: [] });
        }

        try {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            // This arrangement can be altered based on how we want the date's format to appear.
            let currentDate = `${year}-${month}-${day}`;
            let dueDate = `${year}-${month}-${day + 14}`
            const loans = await execute<Loan>(BooksQueries.InsertLoan, [req.params.card_id, currentDate, dueDate]);

            return res.status(200).json({ status: true, message: 'Loan Inserted', data: loans });

        } catch (error) {

            return res.status(200).json({ status: false, message: 'Internal Server error', data: [error] });
        }
    };

};


