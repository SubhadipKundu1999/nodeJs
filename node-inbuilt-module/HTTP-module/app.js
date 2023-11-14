const http = require('http');


const port =8000;



//the class http.server is inherits from net.Server which is an EventEmitter with several events


                    //// low level design   ////
const server =  http.createServer()
server.on('connection',(socket)=>{

    console.log("new connection");
})


server.listen(port)




                         //// high level//// 

const server = http.createServer( function(request, response){
    //add http header(optional);
    response.writeHead(200,{'content-Type':'text/html'});
    //read query string(optional)
    response.write(request.url);
    
    response.write('Hello World');
    response.end("server end");
})

server.listen(port,()=>{
    console.log("listening from port no: ", port);
});








// how to set routing

const server = http.createServer( function(request, response){
if(request.url=="/"){
    response.write('home page');
    response.end();
}    
if(request.url=="/about"){
    response.write('About page');
    response.end();
}    

if(request.url=="/users"){
    response.write(JSON.stringify(['user1, user2', 'user3']));
    response.end();
}    



})

server.listen(port,()=>{
    console.log("listening from port no: ", port);
});








