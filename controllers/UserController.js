import User from "../models/UserModel.js";
import RankPointUser from "../models/RankPointUserModel.js"
import {validationResult} from "express-validator";
import bcryptjs from "bcryptjs";
import QueryTypes from "sequelize";

export const getUsers = async(req,res)=>{
    try {
        const response = await User.findAll({
            attributes: ['user_id','user_name', 'email','gender','createdAt','rank_point_user_id','img_profil']
        })
        
        res.status(200).json({data:response})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const getUsersById = async(req,res)=>{
    try {
        const response = await User.findOne({
            where:{
                user_id: req.params.id
            }
        })
        res.status(200).json({data:response})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const createUser = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {user_name, email, password,gender, img_profil, rank_point_user_id, job_class_id} = req.body
            User.findOne({
                where:{
                    user_name:user_name
                }
            }).then(async function(user){
                if(user){
                    res.json({status:500,msg:"Name is Already Taken"});
                }else{
                    let hashPassword = await bcryptjs.hash(password,8)
                    let dataRankPointUser ={
                                rank_id:null,
                                rank_point:0
                            }
                   
                    await RankPointUser.create(dataRankPointUser)
                    .then(async function(x){
                        let data = {
                            user_name : user_name,
                            email : email,
                            password: hashPassword,
                            gender: gender,
                            img_profil: img_profil,
                            rank_point_user_id: x.rank_point_user_id,
                            job_class_id:null
                        }
                        await User.create(data).then(function(newUser, created){
                            if(!newUser){
                                res.status(500).json({msg:"User Input Error"});
                            }
                            if(newUser){
                                res.status(200).json({status:200,msg:"User Created"})
                            }
                    })
                    })
                }
            })
        }
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const updateUser = async(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json(errors)
        }else{
            const {user_name, email, password,gender, img_profil, job_class_id} = req.body
            User.findOne({
                where:{
                    user_id:req.params.id,
                    user_name:user_name
                }
            }).then(async function(user){
                if(user){
                    if(password ==  null){
                        var data = {
                            email : email,
                            gender: gender,
                            img_profil: img_profil,
                            job_class_id:job_class_id
                        }
                    }else{
                        let hashPassword = await bcryptjs.hash(password,8)
                        var data = {
                                email : email,
                                password: hashPassword,
                                gender: gender,
                                img_profil: img_profil,
                                job_class_id:job_class_id
                            }
                    }
                    
                    await User.update(data,{
                        where:{
                            user_id:req.params.id,
                        }
                    }).then(function(updateUser, created){
                        if(!updateUser){
                            res.status(500).json({msg:"User Input Error"});
                        }
                        if(updateUser){
                            res.status(200).json({status:200,msg:"User Updated"})
                        }
                    })
                }else{
                    res.status(500).json({msg:"User Not Exits"});
                }
            })
            // await User.update(req.body,{
            //     where: {
            //         id:req.params.id
            //     }
            // })
            // res.status(200).json({msg:"User Updated"})
        }
    } catch (error) {
        res.json(500).json({msg:error})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        await User.destroy({
            where:{
                user_id: req.params.id
            }
        })
        res.status(200).json({status:204,msg:"User Deleted"})
    } catch (error) {
        res.json(500).json({msg:error})
    }
}