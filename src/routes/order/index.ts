import express from 'express';

import orderController from '../../controllers/order/order_controller';

const orderRouter =  express.Router();

orderRouter.post('/createOrder', orderController.createOrder )

orderRouter.put('/updateOrder/:orderId', orderController.updateOrder )
orderRouter.delete('/deleteOrder/:orderId', orderController.DeleteOrder )

orderRouter.get('/:orderId', orderController.getOrder)


export default orderRouter;

