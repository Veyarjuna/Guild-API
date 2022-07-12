import Rank from "../models/RankModel.js";
import {validationResult} from "express-validator";

export const getRanks = async(req, res)=>{
    try {
        const response = await Rank.findAll()
        res.status(200).json({data:response});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const getRanksById = async (req, res) => {
    try {
        const response = await Rank.findOne({
            where:{
                rank_id: req.params.id
            }
        })
        res.status(200).json({data:response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const createRank = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {rank_name,minimum_rank} = req.body
            Rank.findOne({
                where:{
                    rank_name:rank_name
                }
            }).then(async function(rank){
                if(rank){
                    res.json({status:500,msg:"Name is Already Taken"});
                }else{
                    let data = {
                        rank_name: rank_name,
                        minimum_rank: minimum_rank
                    }
                    await Rank.create(data).then(function(newRank, Created){
                        if(!newRank){
                            res.status(500).json({msg:"Rank Input Error"})
                        }else{
                            res.status(200).json({status:200,msg:"Rank Created"})
                        }
                    })
                }
            })
        }   
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const updateRank = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {rank_name,minimum_rank} = req.body
            Rank.findOne({
                where:{
                    rank_id: req.params.id,
                    rank_name:rank_name
                }
            }).then(async function(rank){
                if(rank){
                    let data = {
                        rank_name: rank_name,
                        minimum_rank: minimum_rank
                    }
                    await Rank.update(data,{
                        where:{
                            rank_id: req.params.id,
                        }
                    }).then(function(newRank, Created){
                        if(!newRank){
                            res.status(500).json({msg:"Rank Input Error"})
                        }else{
                            res.status(200).json({status:200,msg:"Rank Updated"})
                        }
                    })
                }else{
                    res.status(500).json({status:500,msg:"Name is Already Taken"});
                }
            })
        }   
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const deleteRank = async(req, res) => {
    try {
        await Rank.destroy({
            where:{
                rank_id: req.params.id
            }
        })
        res.status(200).json({status:204,msg:"rank Deleted"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}