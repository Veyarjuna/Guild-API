import express from "express";
import {getRankPointUser, getRankPointUserById,createRankPointUser,updateRankPointUser,deleteRankPointUser} from "../controllers/RankPointUserController.js";
import {RankPointUserValidation} from "../validation/Validation.js"

const router = express.Router();

router.get('/rankpointuser', getRankPointUser);
router.get('/rankpointuser/:id', getRankPointUserById);
router.post('/rankpointuser',RankPointUserValidation, createRankPointUser);
router.patch('/rankpointuser/:id',RankPointUserValidation, updateRankPointUser);
router.delete('/rankpointuser/:id', deleteRankPointUser);

export default router;