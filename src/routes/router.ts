import { Application } from 'express';

import merchantRouter from './merchant';
import orderRouter from './order';

const initAppRoutes = (app:Application) =>{

  
    app.use('/merchant', merchantRouter)
    app.use('/order', orderRouter)
    return app;
}

export default initAppRoutes;