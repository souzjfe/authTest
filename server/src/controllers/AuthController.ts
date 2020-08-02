import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs';


interface userTypes {
    email: String;
    password: String;
}


export default class AuthController {



    async autenticate(request:Request, response: Response){
        const {email, password } = request.body;

        const user = await User.findOne({ email });
        if (!user) return response.status(401).send({error: " user not found"});

        return response.send(user);
        if (!await bcrypt.compare(password, user.password))



    }

}