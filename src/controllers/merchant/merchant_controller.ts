import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import { Prisma } from '.prisma/client';
import fakerService from '../../services/fakerService'
import constants from '../../constants/constants';
import { body } from 'express-validator';
import { Decimal } from '@prisma/client/runtime';

const createMerchant = async(req:Request, res:Response, next:NextFunction) =>{
  try{
       
       
          
    const data  =  await fakerService.fakerMercahntData()
    console.log(data)
    const CreateMerchant = await prismaClient.merchant.createMany({
      data:data
      
    })
    return res.status(200).json({CreateMerchant});
     
     } 
     catch (error) {
         return next(error);
       }
 
 
 }
 




export default{
    createMerchant,
}