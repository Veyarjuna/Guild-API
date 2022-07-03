import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const RankPointUser = db.define('rank_point_users',{
    rank_point_user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rank_id: DataTypes.STRING,
    rank_point:{ 
        type:DataTypes.STRING,
        defaultValue: 0,
    },
},{
    freezeTablename: true
});

export default RankPointUser;

(async() => {
    await db.sync()
})();