import dotenv from 'dotenv';
import Debug from 'debug';
import prisma from './extensions/prisma_ext';
import server from './server';
import QueueExt from './extensions/queues_ext';

import myWorker from './worker';
dotenv.config();
const port = parseInt(process.env.PORT || '5000', 10);

const main = async () => {
  await prisma.$connect();
  server.listen(port);
};

main()
  .then(() => console.log('App started on port: '+ port))
  .catch((error) => {
    console.log(error);
    console.log('Server crashed on startup with error ', error.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await QueueExt.AppQueue.close();
    await myWorker.TrainModelWorker.close();
  });
