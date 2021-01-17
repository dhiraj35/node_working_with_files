const mysql = require('mysql2');   

const pool = mysql.createPool({  
    host:'10.2.1.7',     
    user:'rajib',    
    password:'R@j1b@2021',  
    database:'db_grab_sittest',
   // port: '3306',
    
 
});

module.exports = pool.promise();       