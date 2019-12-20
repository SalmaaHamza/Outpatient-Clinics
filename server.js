const express = require('express')
const path = require('path')
const bodyParser=require('body-parser');
const sequelize=require('./util/db')
const Doctor=require('./models/doctor')
const Patient=require('./models/patient')
const Dates=require('./models/date')
const Appointment=require('./models/appointment')
const mainRoutes = require('./routes/main')
const app = express()
//const mysql = require('mysql2')
// parsing the request's body  to enable working with it
app.use(bodyParser.urlencoded({extended:false}))
const viewsDirectory = path.join(__dirname,'../front/views')
app.set('views',viewsDirectory)
app.set('view engine','hbs')
<<<<<<< HEAD:server.js
app.use(express.static(__dirname+'/public/'))
=======
// app.use(express.static(publicDirectory))
// var connectionmysql = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'mysql',
//   database:'outpatient'
// })
>>>>>>> 12ae1288257f4c8e5c46201107eae2159bb42119:back/server.js



// using the routes in the routes file 
app.use(mainRoutes);




// // Defining the relations between tables  
Dates.belongsTo(Doctor ,{constraints:true, onDelete:'CASCADE' });
Doctor.hasMany(Dates);
Doctor.belongsToMany(Patient,{through: Appointment})
Patient.belongsToMany(Doctor,{through: Appointment})

// // synchronizing with database 
sequelize.sync().then(res => { 
  app.listen(3000,() => {
    console.log('Running')
   })
  
})
.catch(err => {
  console.log("err:" ,err);
})


