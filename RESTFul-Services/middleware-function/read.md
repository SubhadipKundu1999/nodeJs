Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle. Middleware gets executed after the server receives the request and before the controller actions send the response. Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.

# Advantages of using middleware:

Middleware can process request objects multiple times before the server works for that request.
Middleware can be used to add logging and authentication functionality.
Middleware improves client-side rendering performance.
Middleware is used for setting some specific HTTP headers.
Middleware helps for Optimization and better performance.



# how write a custom middleware function and what is middleware chain .

// middleware
app.use(express.json());  //build-in-middleware

// custom middleware
app.use(function(req, res, next){
    console.log('logging....');
    next();                   
      // next() help to move the request to next middleware(if available) or to response
})
app.use(function(req, res, next){
    console.log('Authanticating....');
    next();
})

# expreeJs builtin middleware


express.json()   -->  This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

express.urlencoded({extended:true}) ==> it parse incoming request and understand key-value pair and populate req.body object
 extend: true-> with this we can pass complex object and arrqy to url to 


 express.static('public)  -->   This is a built-in middleware function in Express. It serves static files inside public directry 
  let say we have one readme.text file inside public dir.
  in browser we can access it from the root file here app.js like:
  localhost:3000/readme.txt