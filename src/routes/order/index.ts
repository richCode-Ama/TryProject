import express from 'express';

import orderController from '../../controllers/order/order_controller';
import authMiddleware from '../../middlewares/authorization_middleware';
import validateRequestWare from '../../middlewares/validate_request_middleware';
import loginValidator from '../../validators/loginValidator'
import assetMiddleWare from '../../middlewares/media_asset_middleware'

const orderRouter =  express.Router();

orderRouter.get('/createOrder', orderController.createOrder )


export default orderRouter;
