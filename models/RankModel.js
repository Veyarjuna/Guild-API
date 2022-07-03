import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const Rank = db.define('ranks',{
    rank_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rank_name: DataTypes.STRING,
    minimum_rank: DataTypes.INTEGER,
},{
    freezeTablename: true
});

export default Rank;

(async() => {
    await db.sync()
})();