import express, { Request, Response } from "express";
import User from "../database/models/user";



export default class authController {

    async create(request: Request, response: Response) {
        try {
            const storageNewUser = await User.create(request.body);
            
            return response.json({storageNewUser});
        }catch (err){
            return response.json(400).send({error:"Error Registration Failed"})
        }
    }
}