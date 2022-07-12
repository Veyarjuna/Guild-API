import JobClass from "../models/JobClassModel.js";
import {validationResult} from "express-validator";

export const getJobClass = async(req, res) => {
    try {
        const response = await JobClass.findAll()
        res.status(200).json({data:response});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const getJobClassById = async(req, res) => {
    try {
        const response = await JobClass.findOne({
            where:{
                job_class_id: req.params.id
            }
        })
        res.status(200).json({data:response})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const createJobClass = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {name_job_class, level_job_class} = req.body;
            JobClass.findOne({
                where:{
                    name_job_class:name_job_class
                }
            }).then(async function(jobclass){
                if(jobclass){
                    res.json({status:500,msg:"Job is Already Taken"});
                }else{
                    let data = {
                        name_job_class: name_job_class,
                        level_job_class: level_job_class
                    }
                    await JobClass.create(data)
                    res.status(200).json({status:200,msg: "New job Class Created"})
                }
            })
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const updateJobClass = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {name_job_class, level_job_class} = req.body;
            JobClass.findOne({
                where:{
                    job_class_id:req.params.id,
                    name_job_class:name_job_class
                }
            }).then(async function(jobclass){
                if(jobclass){
                    let data = {
                        name_job_class: name_job_class,
                        level_job_class: level_job_class
                    }
                    await JobClass.update(data,{
                        where:{
                            job_class_id:req.params.id
                        }
                    })
                    res.status(200).json({status:200,msg: "New job Class Updated"})
                }else{
                    res.status(500).json({status:500,msg:"Job is Already Taken"});
                }
            })
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export const deleteJobClass = async(req, res) => {
    try {
        await JobClass.destroy({
            where:{
                job_class_id: req.params.id
            }
        })   
        res.status(200).json({status:204,msg:"Job Class Deleted"})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}