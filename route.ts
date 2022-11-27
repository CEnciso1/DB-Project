import express, { Router } from 'express';
import booksRoutes from './controller/v1/books/route';
import { allRoute } from './utiles/interface';
import Routes from './utiles/routes';

export default class Route {

    public router: Router = express.Router();

    constructor() {

        const postData: allRoute = [
            { type: 'books', route: booksRoutes }
        ];

        this.intializeV1Routes(postData);
    }

    public intializeV1Routes(postData: allRoute) {
        const route = new Routes('v1', postData);
        this.router = route.router;
    }

}
