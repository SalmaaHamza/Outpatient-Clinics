const express = require('express')
const path = require('path')
const DirName=require('./util/path');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
const sequelize=require('./util/db')
const Doctor=require('./models/doctor')
const Patient=require('./models/patient')
const Dates=require('./models/date')
const Appointment=require('./models/appointment')
const mainRoutes = require('./routes/main')
const app = express()

app.engine('handlebars', exphbs({layout: false}));
app.set('view engine', 'handlebars');
app.set('views','views/home');
// parsing the request's body  to enable working with it
app.use(bodyParser.urlencoded({extended:false}))
// const viewsDirectory = path.join(DirName,'views/home');

app.use(express.static(DirName+'/public/'));

// using the routes in the routes file 
app.use(mainRoutes);


// Defining the relations between tables  
Dates.belongsTo(Doctor ,{constraints:true, onDelete:'CASCADE' });
Doctor.hasMany(Dates);
Doctor.belongsToMany(Patient,{through: Appointment})
Patient.belongsToMany(Doctor,{through: Appointment})

// synchronizing with database 
sequelize.sync({force:true}).then(res => { 
  app.listen(3000,() => {
    console.log('Running')
   })
  
})
.catch(err => {
  console.log("err:" ,err);
})



