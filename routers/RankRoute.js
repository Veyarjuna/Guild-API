import express from "express";
import { getRanks,getRanksById, createRank, updateRank, deleteRank } from "../controllers/RankController.js";
import {RankValidation} from "../validation/Validation.js"

const router = express.Router();

router.get('/ranks',getRanks);
router.get('/ranks/:id', getRanksById);
router.post('/ranks',RankValidation, createRank);
router.patch('/ranks/:id',RankValidation, updateRank);
router.delete('/ranks/:id', deleteRank);

export default router;