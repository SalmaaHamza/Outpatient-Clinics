const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Appointment= sequelize.define('Appointments',{
    id:{
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement:true
    },
    Date: {
    type:Sequelize.STRING,
    allowNull:true
    },
    Description:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DoctorFName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    DoctorLName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Time:{
        type:Sequelize.STRING,
        allowNull:false
    },
    PSSN:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    DSSN:{
        type:Sequelize.INTEGER,
        allowNull:false
    }



})


module.exports=Appointment;