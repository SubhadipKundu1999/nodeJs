#### Authentication and Authorization

# Authentication :
  is the process of determining if the user is who he/she claims to 
be. It involves validating their email/password.
# Authorization :
  is the process of determining if the user has permission to perform 
a given operation.
- To hash passwords, use bcrypt:
# Hashing passwords
```const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(‘1234’, salt);
```
 # Validating passwords
```const isValid = await bcrypt.compare(‘1234’, hashed);
```

- A JSON Web Token (JWT) is a JSON object encoded as a long string. We use 
them to identify users. It’s similar to a passport or driver’s license. It includes a 
few public properties about a user in its payload. These properties cannot be 
tampered because doing so requires re-generating the digital signature. 
- When the user logs in, we generate a JWT on the server and return it to the 
client. We store this token on the client and send it to the server every time we 
need to call an API endpoint that is only accessible to authenticated users.
- To generate JSON Web Tokens in an Express app use jsonwebtoken package. 

# Generating a JWT 

```const jwt = require(‘jsonwebtoken’);
const token = jwt.sign({ _id: user._id}, ‘privateKey’);```
- Never store private keys and other secrets in your codebase. Store them in 
environment variables. Use the config package to read application settings 
stored in environment variables. 

- When appropriate, encapsulate logic in Mongoose models: 
## Adding a method to a Mongoose model
```userSchema.methods.generateAuthToken = function() { 
} 
const token = user.generateAuthToken();
```
- Implement authorization using a middleware function. Return a 401 error 
(unauthorized) if the client doesn’t send a valid token. Return 403 (forbidden) if 
the user provided a valid token but is not allowed to perform the given operation.
- You don’t need to implement logging out on the server. Implement it on the client 
by simply removing the JWT from the client. 
- Do not store a JWT in plain text in a database. This is similar to storing users’ 
passports or drivers license in a room. Anyone who has access to that room can 
steal these passports. Store JWTs on the client. If you have a strong reason for 
storing them on the server, make sure to encrypt them before storing them in a 
database.



#### Error Handling

## use try and catch block
 
 
- ```router.get('/', async (req, res, next)=>{
     
        const movies =  await Movie.find().sort({title:1});
        res.send(movies);
     
});```

- if you do not handle rejected promise , it will stop your server
better to use try and catch block


```   router.get('/', async (req, res, next)=>{

     try{
        const movies =  await Movie.find().sort({title:1});
        res.send(movies);
     }
     catch(ex){
       res.status(500).send('internal server error');
     }

});
```
## handle similar type error:
 each routing error can be handled by building another middleware handler which will execute after main handler function and we can call next middleware inside catch block

 //middleware

 ```app.use(function(req, res, neext){
    
    //log the exception
    res.status(500).send('internal server error');
})```

//handler
```    try{
        const movies =  await Movie.find().sort({title:1});
        res.send(movies);
     }
     catch(ex){
      next(); // call next middleware
     }

});
```








#### Automated Testing :


## Defination :
   The practice of writing code to test our code and then those tests in an automated fashion

  in automated testing our source code consist two types of code, production code and test code

## Benifits:
1. Test your code  frequently, in less time
2. catch the bug before deploying
3. Deploy with confidence
4. Refactor your code with confidance:
   - refactoring means changing the structure of the code without changing its behavior.
5. facus on the quality

## types of  Automated Testing

1. Unit Test
2. Integration Test
3. End-to-End Test

# Unit Testing:
- Defination:

   unit testing is a process of testing individual units or components of our application in isolation. 
   an "unit" is smallest , testable part of the application, such as function, methods and class

- Key Characteristics:
1. Focuses on a specific unit of code.
2. Tests are isolated and independent, meaning they don't rely on external dependencies.
3. Typically written and executed by developers during the development phase.
4. Aims to ensure that each unit of code performs as expected.

- Benifts : 
1. cheap  to write,
2. Execute Fast
- Disadvantages
Do not give a lots of confidance


# Integration Test

- Defintion: 
 Integration testing is the process of testing the combination or interaction of different units 
 or components of a software application. The goal is to detect issues that may arise from the 
 integration of these units.

 - Key Characteristics:
1. Focuses on interactions between units or components.
2. Tests how different modules work together.
3. Helps identify issues such as communication problems, data flow problems,
   or incorrect assumptions about how different units should collaborate.
4. Can be performed by developers or a dedicated testing team.

# End-to-End Testing:

- Definition:

    End-to-end testing is the process of testing an entire software application from start to finish. It involves testing the application in a way that simulates real user scenarios, including user interactions with various components and systems.

- Key Characteristics:

 1. Tests the entire application flow, including all integrated components.
 2. Simulates real-world user scenarios, checking if the application behaves as expected from the user's perspective.
 3. Involves testing across different layers, such as the user interface, backend, and external dependencies.
 4. Often performed by a dedicated testing team or using automated testing tools.

## Test Pyramid typically consists of three levels:

# Unit Tests (Bottom of the Pyramid):

- Description: Unit tests form the base of the pyramid and are the largest in number.
- Scope: Tests individual units or components in isolation.
- Purpose: Verify that each unit of code works as expected.
- Characteristics: Fast to execute, isolated, and focused on specific functions or methods.
- Responsible Parties: Mostly written and maintained by developers.

# Integration Tests (Middle of the Pyramid):

- Description: Integration tests sit in the middle of the pyramid.
- Scope: Tests the interaction between different units or components.
- Purpose: Ensure that integrated components work together as expected.
- Characteristics: May be slower than unit tests due to broader scope, may involve external dependencies.
- Responsible Parties: Developers and/or dedicated testing teams.

# End-to-End Tests (Top of the Pyramid):

- Description: End-to-end tests are at the top of the pyramid and are the smallest in number.
- Scope: Tests the entire application flow from start to finish, simulating real user scenarios.
- Purpose: Verify that the entire system behaves correctly from the user's perspective.
- Characteristics: Slowest to execute, involves testing across different layers (UI, backend, external systems).
- Responsible Parties: Dedicated testing teams or automated testing tools.
        
  ```      
             /   \
           /       \
          /  E2E    \   
         -------------    
         /           \
        /  Integration\
        ---------------
       /     Unit      \
       -----------------
       ```

   # takeways:
   - Favour unit tests to e2e tests.
   - Cover unit test gaps with integration tests
   - Use end to end tests sparingly

 ## Tooling:
  To text, we need a test framework 
  a test framework givs a  Library and a Text runner   
  # Library
   In the context of a test framework, a library refers to a collection of pre-written code or functions that provides a set of reusable functionalities to help with testing. These functions are often designed to simplify common testing tasks, such as making assertions, interacting with the application under test, and managing test data
# Test Runner:
A test runner is a component of a test framework that is responsible for discovering, organizing, and executing tests. It provides an environment for running tests and generates reports on the test results. The test runner is often invoked from the command line or integrated into a development environment.

## framewoks:
  1. jasmine
  2. Mocha with Chai and Sinon
  3. Jest 
  

#### jest:
# install:
 npm install --save-dev jest
# change "test" in dide "script"

  "scripts": {
    "test": "jest"
  }, 

# run test :
 npm test

# write first test case:

- lib.js
```
module.exports.absolute = function(number) {
  return number >= 0 ? number : -number;
};
```
- test/lib.test.js

``` const lib = require("../lib");

test('absolute - should return a positive number if input is positive', ()=>{
const result = lib.absolute(1);
expect(result).toBe(1);

});

test('absolute - should return a positive number if input is negative', ()=>{
    const result = lib.absolute(-1);
    expect(result).toBe(1);
    
});

test('absolute - should return 0 number if input is 0', ()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
        
});    

```
# Grouping test:
```
 describe('absolute',()=>{

it('should return a positive number if input is positive', ()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1);
    
    });
    
    it('should return a positive number if input is negative', ()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
        
    });
    
    it('should return 0 number if input is 0', ()=>{
            const result = lib.absolute(0);
            expect(result).toBe(0);
            
    });    
    
 })
 ```
#
