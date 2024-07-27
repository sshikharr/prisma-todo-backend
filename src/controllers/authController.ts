import { signup, signin } from "../services/authService";
import { signupSchema, signinSchema } from "../utils/validation";
import { Request, Response } from "express";

export async function controllerSignup(req: Request, res: Response){
    try{
        const validation = signupSchema.parse(req.body)
        console.log(validation);
        const user = await signup(validation.username, validation.name, validation.password)
        res.status(201).json({
            user: user
        })
    }catch{
        res.status(400).json({error: "Send correct inputs"})
    }
}   

export async function controllerSignin(req: Request, res: Response){
    try{
        const validation = signinSchema.parse(req.body)
        const token = await signin(validation.username, validation.password);
        res.status(201).json({
            token: token
        })
    }catch{
        res.status(400).json({error: "Invalid inputs"})
    }
}