import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs';



interface userTypes {
    _id: string;
    name: string
    createdAt: string;
    updatedAt: string;
    __v: number;
    email: string;
    password: string;
}


export default class AuthController {

    
    
    async autenticate(request:Request, response: Response){
        const {emai, passwor } = request.body;
        const user: userTypes = await User.findOne({ emai });
        if (!user) 
            return response.status(401).send({error: " user not found"});
    
        if (!await bcrypt.compare(passwor,user.password)) 
            return response.status(401).send({error:"invalid Password"});



    }

}