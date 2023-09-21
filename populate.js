import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Job from './models/Job.js';
import Data from './data.js';

try {
  
  await mongoose.connect(process.env.MONGO_URL);
 
  const jo = Job.create({company:"nokia"});
 console.log(typeof(Data));
  
  const jobs = Data.map((job) => {
    console.log("------------------------------------------------");
    console.log(job);
    Job.create({...job});
  });
  
 // await Job.create(jobs);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
