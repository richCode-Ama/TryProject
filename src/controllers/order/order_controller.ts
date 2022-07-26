import { NextFunction, Request, Response } from 'express';
import prismaClient from '../../extensions/prisma_ext';
import BadRequestError from '../../errors/bad-request-error';

const createOrder = async(req:Request, res:Response, next:NextFunction) =>{
  try{
    const{pizzaId, personName } = req.body
    const CreateOrder = await prismaClient.order.create({
        data:{
            pizzaId,
            personName
        }
    })

    if(!CreateOrder){
        throw new BadRequestError("sorry order couldn't go through");
      }
    return res.status(200).json({ });
     
     } 
     catch (error) {
         return next(error);
       }
 
 
 }


 const updateOrder = async(req:Request, res:Response, next:NextFunction) =>{
    try{
       const  { orderId, personName, pizzaId } = req.body;    
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
      const {orderId} =  req.body;
      const DeleteOrder =  await prismaClient.order.delete({where:{
        id: orderId
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
      const {orderId} =  req.body;
      const Order = await prismaClient.order.findUnique({where:{
        id: orderId
      }})
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