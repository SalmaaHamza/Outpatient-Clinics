const express = require('express')
const path = require('path')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
const viewsDirectory = path.join(__dirname,'../front/views')
const publicDirectory = path.join(__dirname,'../front/public')
app.set('views',viewsDirectory)
app.set('view engine','hbs')
app.use(express.static(publicDirectory))


app.get('/',(req,res)=>{
    console.log(req)
    res.render(path.join(__dirname,'../front/views/home/index.hbs'))

}

)
app.listen(3000,() => {
    console.log('Running')
})