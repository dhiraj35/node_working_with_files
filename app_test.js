const http = require('http');
const port = 4000;

const fs = require('fs');


/*
const server =  http.createServer(function(){
    console.log("test");
})*/

const server = http.createServer((req,res)=>{

const url = req.url;
const method = req.method;

   if(url==='/'){  

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Html Example</title></head>');
    res.write('<body><h1>This is Redirect  server example</h1><form  action="/message" method="post"> <input type="text" name="msg"> <input type="submit"> </form></body>');
    res.write('</html>');  
    return  res.end();  

   }
   if(url==='/message' && method==='POST'){
     const body = [];
     req.on('data',(chunk)=>{
        body.push(chunk);
     });
     return  req.on('end',()=>{  
         const parsedata = Buffer.concat(body).toString();
         const message = parsedata.split('=')[1];        
         fs.writeFileSync('msg.txt',message);     
         res.statusCode=302;
         res.setHeader('Location','/');
        return res.end();        
        })          
     
   } 
   
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Html Example</title></head>');
    res.write('<body><h1>This is server example</h1></body>');
    res.write('</html>');  
    res.end();  



    
})

server.listen("5000");      

/*
server.listen(("2000",()=>{   
    console.log(`server is running on port ${port}`);  
}))  */      