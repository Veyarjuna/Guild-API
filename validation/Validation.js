import {check} from "express-validator";

export const UserValidation = [
    check('user_name','Name is Required').notEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 8 }),
    check('gender', 'Select Gender'),
    check('img_profil', 'Select IMG'),
    check('rank_point_user_id').isEmpty(),
    check('job_class_id')
]

export const RankValidation = [
    check('rank_name','Insert Name Rank').notEmpty(),
    check('minimum_rank','Insert Number').notEmpty()
]

export const RankPointUserValidation = [
    check('rank_id','Insert Rank Id'),
    check('rank_point','Rank Point Required')
]

export const JobDeskvalidation = [
    check('name_job_desk', 'Job is Required').notEmpty(),
    check('point').notEmpty(),
    check('proof_job_desk').notEmpty(),
]

export const JobClassValidation = [
    check('name_job_class','Insert Job Name').notEmpty(),
    check('level_job_class', 'Input Class').notEmpty()
]

export const Menuvalidation = [
    check('name_menu').notEmpty(),
    check('menu').notEmpty(),
    check('menu_parent').notEmpty(),
    check('menu_has_sub').notEmpty(),
    check('menu_role_access').notEmpty(),
    check('menu_icon').notEmpty(),
    check('menu_endpoint').notEmpty(),
]