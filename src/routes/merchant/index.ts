import express from 'express';

import merchantController from '../../controllers/merchant/merchant_controller';


const merchantRouter =  express.Router();

merchantRouter.post('/seedMerchantAndPizza', merchantController.seedMerchantAndPizza )
merchantRouter.get("/getAllPizza", merchantController.getAllPizza)
merchantRouter.get("/getAllMerchant", merchantController.getAllMerchant)


export default merchantRouter;
