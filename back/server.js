const express = require('express')
const path = require('path')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    console.log(req)
    res.sendFile(path.join(__dirname,'../','front','index.html'))

})
app.listen(3000,() => {
    console.log('Running')
})