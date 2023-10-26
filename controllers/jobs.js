import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import { createCustomError } from '../errors/custom-errors.js';
import Job from '../models/Job.js';


// function that returns a list of jobs as json objects
export const getAllJobs = async (req, res) => {

    const { search , difficulty} = req.query;
    const queryObject = {};

    if (search) {
        queryObject.$or = [
          { company: { $regex: search, $options: 'i' } },
          { position: { $regex: search, $options: 'i' } },
          { contract: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
        ];
      }

    
    const jobs = await Job.find(queryObject);
    res.status(200).json({ jobs });
  };


// function that returns a particular job based on id 
export const getJob = async (req, res, next) => {
    
    const { id: jobID } = req.params
    const job = await Job.findOne({ _id: jobID })

    // custom error as opposed to express async error in the first export function
    if (!job) {
        return next(createCustomError(`No job with the given id : ${jobID}`, 404))
    }
  
    res.status(200).json({ job })
  }

