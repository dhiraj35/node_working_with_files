const http = require("http");  
const port = 3000;  

const server = http.createServer((req,res) => {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Html Example</title></head>');
    res.write('<body><h1>This is server example</h1></body>');
    res.write('</html>');
    res.end();  

});  

server.listen((port),()=>{
 console.log(`server is runningon port :  ${port} `);  
});