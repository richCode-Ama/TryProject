import express from 'express';

import orderController from '../../controllers/order/order_controller';

const orderRouter =  express.Router();

orderRouter.post('/createOrder', orderController.createOrder )
orderRouter.put('/updateOrder', orderController.updateOrder )
orderRouter.delete('/deleteOrder', orderController.DeleteOrder )
orderRouter.get('/', orderController.getOrder)


export default orderRouter;
