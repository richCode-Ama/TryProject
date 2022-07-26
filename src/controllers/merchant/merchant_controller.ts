import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import fakerService from '../../services/fakerService'

const seedMerchantAndPizza = async(req:Request, res:Response, next:NextFunction) =>{
  try{
        
    
    await prismaClient.merchant.deleteMany({})
    const data:any  =  await fakerService.fakerMercahntData()
    const CreateMerchant = await prismaClient.merchant.createMany({
      data:data
      
    })

      const findMerchant = await prismaClient.merchant.findMany({
        select:{
          id:true
        }
      })    
     const finalPizzaData =  await fakerService.finalPizzaData(findMerchant);
      
     await prismaClient.pizza.deleteMany({})
     const CreatePizza = await prismaClient.pizza.createMany({
      data:finalPizzaData
      
    })
      return res.status(200).json({CreateMerchant});
     } 
    
     catch (error) {
         return next(error);
    }
 }
 
export default{
    seedMerchantAndPizza,
}