import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const User = db.define('users',{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    img_profil: DataTypes.STRING,
    rank_point_user_id: DataTypes.STRING,
    job_class_id: DataTypes.STRING,
},{
    freezeTablename: true
});

export default User;

(async() => {
    await db.sync()
})();