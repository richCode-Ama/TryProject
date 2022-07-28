import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import BadRequestError from '../../errors/bad-request-error';

const createOrder = async(req:Request, res:Response, next:NextFunction) =>{
  try{
    const{pizzaId, personName, merchantId } = req.body
    const CreateOrder = await prismaClient.order.create({
        data:{
            pizzaId,
            merchantId,
            personName
        },

    })

    if(!CreateOrder){
        throw new BadRequestError("sorry order couldn't go through");
      }
    return res.status(201).json({ CreateOrder});
     
     } 
     catch (error) {
         return next(error);
       }
 
 
 }


 const updateOrder = async(req:Request, res:Response, next:NextFunction) =>{
    try{

      console.log("hello hpw are")
       const  { pizzaId, personName } = req.body; 
       console.log("fdfdfdf", pizzaId) 
       const orderId =  req.params.orderId;
       
      const UpdateOrder = await prismaClient.order.update({where:{
        id: orderId,
      },
       data:{
        personName:personName,
        pizzaId:pizzaId    
       }})

       if(!UpdateOrder){
        throw new BadRequestError("sorry update wasn't succesful");
      }
      return res.status(200).json({ UpdateOrder});
       
       } 
       catch (error) {
           return next(error);
         }
   
   
   }
 


   const DeleteOrder = async(req:Request, res:Response, next:NextFunction) =>{
    try{
      const orderId =  req.params.orderId;
      const DeletedOrder =  await prismaClient.order.delete({where:{
        id: orderId
      },
    select:{
      id:true,
    }})
      if(!DeleteOrder){
        throw new BadRequestError("sorry Delete wasn't succesful");
      }
      return res.status(200).json({DeleteOrder});
       
       } 
       catch (error) {
           return next(error);
         }
   }
 

   const getOrder = async(req:Request, res:Response, next:NextFunction) =>{
    try{
      
      const orderId =  req.params.orderId;
      const Order = await prismaClient.order.findUnique({where:{
        id: orderId
      },
    select:{
      personName:true,   
      pizza:{
      select:{
        merchant:true,
        name:true,
        price:true,
        size:true,
        type:true,
      }
    }}})
      if(!Order){
        throw new BadRequestError("sorry Couldn't fine this order");
      }
      return res.status(200).json({ Order});
       
       } 
       catch (error) {
           return next(error);
         }
   }



export default{
    createOrder,
    updateOrder,
    DeleteOrder,
    getOrder

}