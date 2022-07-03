import sequelize from "sequelize";

const db = new sequelize('guild-project','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;