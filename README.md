# gst-fillinng

## Tech Stacks 
  1. Node.js
  2. Express.js
  3. MongoDB
  4. JavaScript
  
## Packages
  1. Mongoose
  2. Express
  3. Bcrypt
  4. JsonwebToken
  5. Multer
  6. body-parser
  7. csvtojson

## Api Endpoints

     for registering a user or admin
     1. /users/register => req.body = {name,email,role,password} , Response ={message:"user registered successfully,status:200}.
     
     for logging a user or admin
     2. /users/login => req.body = {email,password} , Response ={message:"user logged in successfully,status:200,token:"access-token"}.
