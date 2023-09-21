import { Router } from 'express';
const router = Router();
import {
    getAllJobs,
    getJob,
} from '../controllers/jobs.js';


// validation middleware for checkecing if an id is a valid param


router.route('/').get(getAllJobs);
router.route('/:id').get(getJob);

export default router;