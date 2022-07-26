
import { faker } from '@faker-js/faker';
import { Merchant } from '.prisma/client';
const fakerMercahntData =  async() =>{

    const data:any[] = []
    for(var i =0; i<2000; i++){
        
        const data2:any = {
          name:faker.name.findName(),
          email:faker.internet.email()
        }
     data.push(data2)
    }

   return data
}

export default{
    fakerMercahntData
}