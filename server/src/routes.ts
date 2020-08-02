import express, { Request, Response } from "express";


//controles

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = express.Router();
const userController = new UserController();
const authController = new AuthController(); 



routes.get('/', (req: Request,res: Response) => {
    res.send("aihsuas");
});

routes.post('/authenticate',authController.autenticate)
routes.post('/users', userController.create);

export default routes;