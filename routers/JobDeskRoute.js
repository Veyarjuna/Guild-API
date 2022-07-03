import express from "express";
import {getJobdesk,getJobdeskById,createJobdesk,updateJobdesk,deleteJobdesk} from "../controllers/JobDeskController.js";
import {JobDeskvalidation} from "../validation/Validation.js"

const router = express.Router();

router.get('/jobdesk',getJobdesk);
router.get('/jobdesk/:id',getJobdeskById);
router.post('/jobdesk',JobDeskvalidation,createJobdesk);
router.patch('/jobdesk/:id',JobDeskvalidation,updateJobdesk);
router.delete('/jobdesk/:id',deleteJobdesk);

export default router