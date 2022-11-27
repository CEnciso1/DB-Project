import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config';
import morgan from 'morgan';
import * as MySQLConnector from './mySqlDb';

export default class App {

    public app: Application;
    public port: number;


    constructor(port: number, Route: any) {

        MySQLConnector.init();
        
        this.app = express();
        this.port = port;

        this.app.use(cors());

        this.app.use(bodyParser.json({ limit: '5mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true, parameterLimit: 50 }));

        this.app.set('port', config.PORT);

        this.app.all('/*', (req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Request-Headers', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, X-L10N-Locale');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });

        this.app.use(morgan('combined'));

        const route = new Route();

        this.app.use('/api', route.router);

        this.app.use("*", (req: Request, res: Response) => {
            res.send(
                `Route path not Found.`
            );
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
};
