import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import fakerService from '../../services/fakerService'

const seedMerchantAndPizza = async(req:Request, res:Response, next:NextFunction) =>{
  try{
        // clearing the datbase anytime
    await prismaClient.pizza.deleteMany({})
    await prismaClient.merchant.deleteMany({})
    // seeding to merchant 
    const data:any  =  await fakerService.fakerMerchantData()
    const CreateMerchant = await prismaClient.merchant.createMany({
      data:data
    })
      const findMerchant = await prismaClient.merchant.findMany({
        select:{
          id:true
        }
      })    
     const finalPizzaData =  await fakerService.finalPizzaData(findMerchant);
     // seeeding  pizza
     const CreatePizza = await prismaClient.pizza.createMany({
      data:finalPizzaData
    })

      return res.status(201).json({CreateMerchant});
     } 
    
     catch (error) {
         return next(error);
    }
 }
 
export default{
    seedMerchantAndPizza,
}