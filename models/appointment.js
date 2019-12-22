const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Appointment= sequelize.define('Appointments',{
    Date: {
    type:Sequelize.STRING,
    allowNull:true,
    },
    Description:{
        type:Sequelize.TEXT,
        allowNull:true
    }
})


module.exports=Appointment;