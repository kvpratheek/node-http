const http = require('http');
const fs   = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {

    if(req.method === 'GET'){

        const resolvedPath = path.resolve("./public/index.html");

        fs.stat(resolvedPath,{},(err, stats) => {
            if(stats.isFile()){
                fs.createReadStream(resolvedPath).pipe(res);
            }
          });

    }
    else{
        res.statusCode(500);
        res.end("Errrr!!! Wrong Request");
    }

});

server.listen(3000,()=>{ console.log("Started..!!")} );