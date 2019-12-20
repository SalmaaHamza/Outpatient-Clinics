const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Doctor= sequelize.define('Doctor',{
    DSSN: {
    type:Sequelize.BIGINT(20),
    allowNull:false,
    primaryKey:true
    },
    FName: {
    type:Sequelize.STRING,
    allowNull:false,
    },
    LName:{
    type:Sequelize.STRING,
    allowNull:false,
    },
    Description:{
    type:Sequelize.TEXT,
    allowNull:true,
    },
    Phone:{
    type:Sequelize.BIGINT(20),
    allowNull:false,
    },
    Dname:{
    type:Sequelize.STRING,
    allowNull:false,
    }

})


module.exports=Doctor;