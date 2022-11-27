import express, { Router, Request, Response } from 'express';
import { allRoute, singleRoute } from './interface';

//* Exporting Routes *//

export default class Routes {

    public router: Router = express.Router();

    constructor(version: string, routes: allRoute) {

        this.initializeRoutes(version, routes)

        this.router.get("/", function (req: Request, res: Response) {
            res.send(
                `${version} api are working perfectly.`
            );
        });
    }

    private initializeRoutes(version: string, routes: allRoute) {
        routes.forEach((el: singleRoute) => {
            this.router.use(`/${version}/${el.type}`, el.route);
        });
    }
};