import { Request, Response, NextFunction } from "express";

export default function asyncErrorHandler(fn:Function){
    return(req:Request, res:Response, next:NextFunction) =>{
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}