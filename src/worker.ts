import { Worker } from 'bullmq';
import dotenv from 'dotenv';
import IoRedis from 'ioredis';



dotenv.config();

// Background worker for  training models
const TrainModelWorker = new Worker(
  "QueName",
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


// TODO:check if multiple workers will help
export default{ TrainModelWorker}