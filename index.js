// Simple body-parser for url-encoded forms

const http = require("http");

http.createServer((req,res)=>{
    //console.log(req);
    var data = '';
    req.on('data', function( chunk ) {
      data += chunk;
    });
    req.on('end',function(){
      
        res.write(JSON.stringify(parseTheBody(data)));
        res.end();
    });



}).listen(3000,()=>console.log("port 3000"));


function parseTheBody(data){

    let dataArr = data.split("&");
    let dataObj = {};
    dataArr.map(el=>{
        let obj = el.split("=");
        dataObj[obj[0]] = obj[1];
    });
    return dataObj;
}

