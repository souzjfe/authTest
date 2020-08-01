import express, { Request, Response } from "express";


//controles

import authController from './controllers/authController'

const routes = express.Router();
const auth = new authController();

routes.post('/users', auth.create);
routes.get('/', (req: Request,res: Response)=>{
    res.send("aihsuas");
})

routes.post('/')


export default routes;