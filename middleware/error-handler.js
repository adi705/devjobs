import { StatusCodes } from 'http-status-codes';
import { CustomAPIError } from '../errors/custom-errors.js';

const errorHandlerMiddleware = (err, req, res, next) => {



  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, please try again';
  res.status(statusCode).json({ msg });
 
}



export default errorHandlerMiddleware;

