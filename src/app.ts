import * as express from "express";
import * as bodyParser from "body-parser"
import { Routes } from './startup/routes';
import { Db } from './startup/db'
import { Cors } from './startup/cors'


class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    
    constructor() {
        this.app = express();
        //enable core
        Cors.enableCores(this.app);
        this.config();        
        this.routePrv.routes(this.app);
        //mongo connection
        Db.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;