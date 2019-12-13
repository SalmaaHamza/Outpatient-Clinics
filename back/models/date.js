const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Dates= sequelize.define('Dates',{
    Date: {
    type:Sequelize.DATE,
    allowNull:false,
    },
    Price:{
    type:Sequelize.INTEGER,
    allowNull:false,
    }

})


module.exports=Dates;