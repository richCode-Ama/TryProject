import express from 'express';

import merchantController from '../../controllers/merchant/merchant_controller';
import authMiddleware from '../../middlewares/authorization_middleware';
import validateRequestWare from '../../middlewares/validate_request_middleware';
import loginValidator from '../../validators/loginValidator'
import assetMiddleWare from '../../middlewares/media_asset_middleware'

const merchantRouter =  express.Router();

merchantRouter.get('/createMerchant', merchantController.createMerchant )


export default merchantRouter;
