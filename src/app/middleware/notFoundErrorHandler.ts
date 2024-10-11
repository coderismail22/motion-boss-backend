/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";



export const notFoundErrorHandler = (req:Request,res:Response,next:NextFunction)=>{
    res.status(404).json({
        success:false,
        message: 'API not found',
        error: ''
    })
}
