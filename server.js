import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import jobs from './routes/jobs.js';

import errorHandlerMiddleware from './middleware/error-handler.js';
// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// for production
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());


// just testing the url
app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
  });

const port = process.env.PORT || 5100;



// jobs url
app.use('/api/v1/jobs',  jobs);


// invalid urls
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
  });
    

// custom error handler middleware to show user firiendly messages 
app.use(errorHandlerMiddleware);  
   


// starting the server after connecting to the mogodab database
const start = async () => {
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}...`);
    });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  
  };
  
  
start();
  
