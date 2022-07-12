import express from "express";
import {getMenus,getMenusById,createMenu,deleteMenu} from "../controllers/MenuController.js";
import {Menuvalidation} from "../validation/Validation.js";

const router = express.Router();

router.get('/menus', getMenus);
router.get('/menus/:id', getMenusById);
router.post('/menus',Menuvalidation, createMenu);
router.delete('/menus/:id', deleteMenu);

export default router;
