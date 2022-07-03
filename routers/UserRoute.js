import express from "express";
import { getUsers, getUsersById, createUser, updateUser, deleteUser} from "../controllers/UserController.js";
import {UserValidation} from "../validation/Validation.js"

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users',UserValidation,createUser);
router.patch('/users/:id',UserValidation, updateUser);
router.delete('/users/:id', deleteUser);

export default router;