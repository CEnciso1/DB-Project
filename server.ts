import Route from './route';
import App from './utiles/app';
import { config } from './utiles/config';

const app = new App(config.PORT, Route);

app.listen();