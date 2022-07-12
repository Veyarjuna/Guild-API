import JobDesk from "../models/JobDeskModel.js";
import {validationResult} from "express-validator";

export const getJobdesk = async(req, res) => {
    try {
        const response = await JobDesk.findAll()
        res.status(200).json({data:response});
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const getJobdeskById = async(req, res) => {
    try {
        const response = await JobDesk.findOne({
            where: {
                job_desk_id: req.params.id
            }
        })
        res.status(200).json({data:response})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const createJobdesk = async(req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {name_job_desk,point,proof_job_desk} = req.body;
            JobDesk.findOne({
                where:{
                    name_job_desk:name_job_desk
                }
            }).then(async function(jobdesk){
                if(jobdesk){
                    res.json({status:500,msg:"Name is Already Taken"});
                }else{
                    let data = {
                        name_job_desk: name_job_desk,
                        point: point,
                        proof_job_desk: proof_job_desk
                    }
                    await JobDesk.create(data)
                    res.status(200).json({status:200,msg:"Job Desk Added"})
                }
            })
        }
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const updateJobdesk = async(req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {name_job_desk,point,proof_job_desk} = req.body;
            JobDesk.findOne({
                where:{
                    job_desk_id:req.params.id,
                    name_job_desk:name_job_desk
                }
            }).then(async function(jobdesk){
                if(jobdesk){
                    let data = {
                        name_job_desk: name_job_desk,
                        point: point,
                        proof_job_desk: proof_job_desk
                    }
                    await JobDesk.update(data,{
                        where:{
                            job_desk_id:req.params.id
                        }
                    })
                    res.status(200).json({status:200,msg:"Job Desk Updated"})
                }else{
                    res.status(500).json({status:500,msg:"Name is Already Taken"});
                }
            })
        }
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const deleteJobdesk = async(req, res) => {
    try {
        await JobDesk.destroy({
            where:{
                job_desk_id: req.params.id
            }
        })
        res.status(200).json({status:204,msg:"Job Desk Deleted"})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}