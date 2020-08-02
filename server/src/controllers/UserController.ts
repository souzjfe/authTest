import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs';



export default class UserController {

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        // procura se existe um usuário com o mesmo email já
        const userExists = await User.findOne({ email });

        // se existir retorna erro de 401 de não autorizado
        if (userExists) {
          return response.status(401).json({ error: `User ${email} already exists` });
        }

        // criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 8);
        // cria e salva o usuário com a senha criptografada
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })


        return response.json(user);
    }
}