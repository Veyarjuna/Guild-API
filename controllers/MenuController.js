import Menu from "../models/MenuModel.js";
import { validationResult } from "express-validator";

export const getMenus = async(req, res)=>{
    try {
        const response = await Menu.findAll()
        res.status(200).json({data:response});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

export const getMenusById = async(req, res) =>{
    try {
        const response = await Menu.findOne({
            where:{
                menu_id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const createMenu = async(req, res)=>{
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            await Menu.create(req.body)
            res.status(200).json({status:200,msg:"Menu Created"});
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const deleteMenu = async(req, res)=>{
    try {
        await Menu.destroy({
            where:{
                menu_id: req.params.id
            }
        })
        res.status(200).json({status:204, msg:"Menu Deleted"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}