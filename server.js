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

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());


app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
  });

const port = process.env.PORT || 5100;



app.use('/api/v1/jobs',  jobs);


app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
  });
    
app.use(errorHandlerMiddleware);  
   


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
  
