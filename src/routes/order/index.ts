import express from 'express';

import orderController from '../../controllers/order/order_controller';

const orderRouter =  express.Router();

orderRouter.post('/createOrder', orderController.createOrder )
orderRouter.put('/updateOrde:orderId', orderController.updateOrder )
orderRouter.delete('/:orderId', orderController.DeleteOrder )
orderRouter.post('/:orderId', orderController.getOrder)


export default orderRouter;

