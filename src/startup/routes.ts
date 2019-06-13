import { Authenticate } from './../middleware/authenticate'
import * as fileUpload from 'express-fileupload'
import { UserController } from './../controllers/userController'
import { userRoutes } from './../routes/userRoutes'
import { cardRoutes } from './../routes/cardRoutes'
import { bankRoutes } from './../routes/bankRoutes'
import * as express from 'express'

const userController = new UserController();

export class Routes {

    constructor(){}
    public routes(app :express.Application): void {   
        app.use(fileUpload());
        app.get('/', (req, res) => {
            res.status(200).send({
                message: 'Health Check Success'
            })
        });

        app.get('/rahul', (req, res) => {
            res.status(200).send({
                message: 'MY NAME IS RAHUL'
            })
        });

        app.post('/register', userController.register);
        app.post('/login', userController.login);
        app.use('/user',userRoutes);
        app.use('/card',cardRoutes);
        app.use('/bank',bankRoutes);
    }
}