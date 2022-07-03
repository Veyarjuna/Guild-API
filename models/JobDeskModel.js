import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const JobDesk = db.define('job_desk',{
    job_desk_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_job_desk: DataTypes.STRING,
    point: DataTypes.STRING,
    proof_job_desk: DataTypes.STRING,
},{
    freezeTablename: true
});

export default JobDesk;

(async() => {
    await db.sync()
})();