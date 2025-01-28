import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class UserController{
    static async find(req:Request, res:Response){
        try{
            console.time('find Users')
           const users = await prisma.user.findMany();
           console.timeEnd('find Users')
           return res.json(users)
        }catch(e){
            console.log(e)
            return res.json({error: e})
        }
     }
}