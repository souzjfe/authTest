import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs';



export default class UserController {

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
          return response.status(401).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return response.json(user);
    }
}