import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const JobClass = db.define('job_class',{
    job_class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_job_class: DataTypes.STRING,
    level_job_class: DataTypes.STRING,
},{
    freezeTablename: true
});

export default JobClass;

(async() => {
    await db.sync()
})();