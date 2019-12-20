const path = require('path')

// the main route which render the main html page
exports.mainroute=(req,res,next) => {

    res.sendFile(path.join(__dirname,'../views/home/index.html'));

}

