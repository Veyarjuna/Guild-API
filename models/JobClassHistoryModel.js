import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const JobClassHistory = db.define('job_class_history',{
    user_id: DataTypes.STRING,
    job_class_id: DataTypes.STRING,
    change_at: DataTypes.STRING,
},{
    freezeTablename: true
});

export default JobClassHistory;

(async() => {
    await db.sync()
})();