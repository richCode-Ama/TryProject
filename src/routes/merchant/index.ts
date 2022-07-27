import express from 'express';

import merchantController from '../../controllers/merchant/merchant_controller';


const merchantRouter =  express.Router();

merchantRouter.post('/seedMerchantAndPizza', merchantController.seedMerchantAndPizza )


export default merchantRouter;
