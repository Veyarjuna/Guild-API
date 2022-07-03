import sequelize from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = sequelize;

const Menu = db.define('menus', {
    menu_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_menu: DataTypes.STRING,
    menu: DataTypes.STRING,
    menu_parent: DataTypes.STRING,
    menu_has_sub: DataTypes.STRING,
    menu_role_access: DataTypes.STRING,
    menu_icon: DataTypes.STRING,
    menu_endpoint: DataTypes.STRING,
}, {
    freezeTable: true
});

export default Menu;

(async()=>{
    await db.sync()
})
