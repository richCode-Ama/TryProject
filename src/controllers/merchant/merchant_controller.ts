import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import fakerService from '../../services/fakerService'

const seedMerchantAndPizza = async(req:Request, res:Response, next:NextFunction) =>{
  try{
        // clearing the datbase anytime
    await prismaClient.order.deleteMany({}) 
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


 const getAllPizza = async(req:Request, res:Response, next:NextFunction) =>{
  try{
   
    const Allpizza = await prismaClient.pizza.findMany({select:{
      id:true,name:true, price:true, size:true, type:true,  merchant:true
    }})
    

      return res.status(200).json({Allpizza});
     } 
    
     catch (error) {
         return next(error);
    }
 }

 const getAllMerchant = async(req:Request, res:Response, next:NextFunction) =>{
  try{
   
    const AllMerchant = await prismaClient.merchant.findMany({select:{
      id:true, email:true,name:true, Order:true
    }})
    

      return res.status(200).json({AllMerchant});
     } 
    
     catch (error) {
         return next(error);
    }
 }
 
export default{
    seedMerchantAndPizza, getAllPizza, getAllMerchant
}