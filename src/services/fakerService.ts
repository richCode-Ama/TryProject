
import { faker } from '@faker-js/faker';
import { Merchant, Pizza } from '.prisma/client';


const PizzaSize = ["small", "large", "Medium"]
const PizzaType =["Vegetarian","Meat", "Cheese" ,"Sausage"]
const generateArandomNumber =  (max:number) =>{
    return Math.floor(Math.random() * max);
  }
const fakerMerchantData =  async() =>{
    const data:Partial<Merchant>[] = []
    for(var i =0; i<2000; i++){
         const data2:Partial<Merchant> = {
          name:faker.name.findName(),
          email:faker.internet.email(),
          }
     data.push(data2)
    }
   return data
}

const finalPizzaData =  async(merchants:any []) =>{
    const initialPizza =  await PizzaInitialFaker();
    initialPizza.forEach((element:any) => {
       const size =  generateArandomNumber(merchants.length)
        element.merchantId =  merchants[size].id
    });
   return initialPizza
}
const PizzaInitialFaker =  async() =>{
    const data:any = []
    for(var i =0; i<2000; i++){
        const data2:any = {
         name:faker.lorem.word(generateArandomNumber(7)+7),
         price:generateArandomNumber(100) +1,
         size: PizzaSize[generateArandomNumber(3)],
         type: PizzaType[generateArandomNumber(4)]
    }
    data.push(data2)
   }
   return data
}

export default{
    fakerMerchantData,
    finalPizzaData
}