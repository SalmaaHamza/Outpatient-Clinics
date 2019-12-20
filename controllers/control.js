const path = require('path')

// the main route which render the main html page
exports.mainroute=(req,res,next) => {

    res.sendFile(path.join(__dirname,'../views/home/index.html'));

}

<<<<<<< HEAD:controllers/control.js
=======
}

>>>>>>> 12ae1288257f4c8e5c46201107eae2159bb42119:back/controllers/control.js
