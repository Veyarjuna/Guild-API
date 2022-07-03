import express from "express";
import {getMenus,getMenusById,createMenu} from "../controllers/MenuController.js";
import {Menuvalidation} from "../validation/Validation.js";

const router = express.Router();

router.get('/menus', getMenus);
router.get('/menus/:id', getMenusById);
router.post('/menus',Menuvalidation, createMenu);

export default router;
