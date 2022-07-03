import express from "express";
import {getJobClass,getJobClassById,createJobClass,updateJobClass,deleteJobClass} from "../controllers/JobClassController.js"
import {JobClassValidation} from "../validation/Validation.js"

const router = express.Router();

router.get('/jobclass',getJobClass);
router.get('/jobclass/:id',getJobClassById);
router.post('/jobclass',JobClassValidation,createJobClass);
router.patch('/jobclass/:id',JobClassValidation,updateJobClass);
router.delete('/jobclass/:id',deleteJobClass);

export default router;