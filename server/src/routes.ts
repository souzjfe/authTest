import express, { Request, Response } from "express";


//controles

import UserController from './controllers/UserController';

const routes = express.Router();
const userController = new UserController();

routes.post('/users', userController.create);

routes.get('/', (req: Request,res: Response)=>{
    res.send("aihsuas");
})

routes.post('/')


export default routes;