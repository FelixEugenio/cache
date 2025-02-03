import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import redis from "../lib/cache";

const prisma = new PrismaClient();
export default class UserController{
  
  
    static async find(req:Request, res:Response){
        try{
         const cacheKey = 'users:all';
         
         const cachedUsers = await redis.get(cacheKey);

         console.time('find Users')
         if(cachedUsers){ 
            console.timeEnd('find Users')
         
            return res.json(JSON.parse(cachedUsers))  
         }
  
           const users = await prisma.user.findMany();
           console.timeEnd('find Users')

         await redis.set(cacheKey, JSON.stringify(users));

           return res.json(users)
        }catch(e){
            console.log(e)
            return res.json({error: e})
        }
     }
}