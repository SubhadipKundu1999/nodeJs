# what is middleware

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




  # Some third-party middlewares

1. helmet:
---> increase http header security
--->           how to use -> 
                    var helmet =require('helmet');
                    app.use(helmet());
2. morgan:  
--->  Morgan is an HTTP request logger middleware for Node.js typically used for Express apps.
Features of Morgan

--->It Logs the HTTP requests along with some other information. You can also configure what you choose to log.

--->Very helpful in debugging and also if you want to create Log files.

--->how to use
const app = express();
app.use(morgan('tiny'));

-->  Using a custom format- Morgan allows you to create custom tokens with the .token()method.

      morgan.token('host', function(req, res) {
      return req.hostname;
     });    


3. cors: CORS is a node.js package that provides a Connect/Express middleware for enabling CORS with a variety of options.

--->Enable All CORS Requests

                  const app = express();
                  app.use(cors())  


---> Enable CORS for a Single Route:
                    app.get('/', cors(), (req, res) => {     
                           res.json({         
                           message: 'Happy Coding'    
                            }); 
                         });


4. Cookie-parser -
   ---->  Cookie-parser is a middleware that transfers cookies with client requests.
   ---> Cookie-parser uses the req.cookies property to access Cookie data. After parsing, the req.cookies object holds cookies sent by request in JSON format.

->read documentation



5. pasport:
---  Passport is a simple unrobustive authentication middleware for Node.js.
---> It consists of a comprehensive set of authentication mechanisms known as "strategies." Those strategies support authentication using either a username and password or Facebook, Twitter, and more. Passport allows the developers to make application-level decisions and choose the best strategy maximizing its flexibility.


  --- read documentation
