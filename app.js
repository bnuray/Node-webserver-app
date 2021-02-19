const http = require('http'); //http ne permite sa cream un webserver
const server = http.createServer((req,res)=>{ 
    if(req.url === '/') {
        var date = new Date();
        var current_minute = date.getMinutes();
        var current_hour = date.getHours();
        res.write(`Salut, ai accesat server-ul la ora ${current_hour}:${current_minute}`);
        res.end();
    } else {
        res.write('Nu ai nimerit unde trebuie');
        res.end();
    }
})
server.listen('4500');
