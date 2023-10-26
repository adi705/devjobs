import { Router } from 'express';
const router = Router();
import {
    getAllJobs,
    getJob,
} from '../controllers/jobs.js';


// todo: validation middleware for checkecing if an id is a valid param


// valid routes
router.route('/').get(getAllJobs);
router.route('/:id').get(getJob);

export default router;