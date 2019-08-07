const fs = require('fs');
const path = require('path');
const router = require('express').Router();

//If a 'routes.js' file exists in any module, it will be used
fs.readdirSync(path.join(__dirname, 'routes'))
  .forEach(function(file) { 
     
    const routerFile = path.join(__dirname, 'routes', file);
    if( fs.existsSync(routerFile)) {
      router.use(require(routerFile));
    }
  });
  
module.exports = router;
