import RankPointUser from "../models/RankPointUserModel.js"
import {validationResult} from "express-validator";
import crypto from "crypto";

const cryptoid = crypto.randomBytes(16).toString("hex");

export const getRankPointUser = async(req, res)=>{
    try {
        const response = await RankPointUser.findAll()
        res.status(200).json({data:response});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const getRankPointUserById = async(req, res)=>{
    try {
        const response = await RankPointUser.findOne({
            where: {
                rank_point_user_id: req.params.id
            }
        })
        res.status(200).json({data:response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const createRankPointUser = async(req, res)=>{
    // try {
    //     const errors = validationResult(req)
    //     if(!errors.isEmpty()){
    //         res.json(errors)
    //     }else{
    //         const {rank_id, rank_point} = req.body
    //         let data = {
    //             rank_point_user_id: cryptoid,
    //             rank_id: rank_id,
    //             rank_point: rank_point
    //         }
    //         await RankPointUser.create(data)
    //         res.status(200).json({msg:"RankPointUser Added"})
    //     }
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
}

export const updateRankPointUser = async(req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            await RankPointUser.update(req.body,{
                where:{
                    rank_point_user_id:req.params.id
                }
            })
            res.status(200).json({status:200,msg:"RankPointUser Updated"})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const deleteRankPointUser = async(req, res) => {
    try {
        await RankPointUser.destroy({
            where:{
                rank_point_user_id:req.params.id
            }
        })
        res.status(200).json({status:204,msg:"RankPointUser Deleted"})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}