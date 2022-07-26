import { Worker } from 'bullmq';
import dotenv from 'dotenv';
import IoRedis from 'ioredis';
import constants from './constants/constants';


dotenv.config();

// Background worker for  training models
const TrainModelWorker = new Worker(
  constants.queueName.ModelQueue,
  async (job) => {
    switch (job.name) {
      // case constants.jobName.trainModel:
      //  await trainModel.trainModelTorecogniseImages(job.data.trainigArray);
      //   break; 
      default:
        break;
    }
  },
  {
    connection: new IoRedis(process.env.REDIS_URL, {
      enableReadyCheck: true,
      maxRetriesPerRequest: null,
    }),
  },
);

const SearchFacesWorker = new Worker(
  constants.queueName.SeachFaceQueue,
  async (job) => {
    switch (job.name) {
      
      default:
        break;
    }
  },
  {
    connection: new IoRedis(process.env.REDIS_URL, {
      enableReadyCheck: true,
      maxRetriesPerRequest: null,
    }),
  },
);

// TODO:check if multiple workers will help
export default{ TrainModelWorker,SearchFacesWorker}