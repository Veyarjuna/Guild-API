import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const JobDeskHistory = db.define('job_desk_history',{
    user_id: DataTypes.STRING,
    job_class_id: DataTypes.STRING,
},{
    freezeTablename: true
});

export default JobDeskHistory;

(async() => {
    await db.sync()
})();