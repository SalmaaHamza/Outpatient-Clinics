const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Appointment= sequelize.define('Appointments',{
    Date: {
    type:Sequelize.DATE,
    allowNull:false,
    }
})


module.exports=Appointment;