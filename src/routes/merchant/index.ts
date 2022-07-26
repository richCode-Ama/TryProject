import express from 'express';

import merchantController from '../../controllers/merchant/merchant_controller';


const merchantRouter =  express.Router();

merchantRouter.get('/seedMerchantAndPizza', merchantController.seedMerchantAndPizza )


export default merchantRouter;
