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
