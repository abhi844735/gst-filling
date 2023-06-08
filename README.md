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
     1. Post Request = /users/register => req.body = {name,email,role,password} , Response ={message:"user registered successfully,status:200}.
     
     for logging a user or admin
     2. Post Request = /users/login => req.body = {email,password} , Response ={message:"user logged in successfully,status:200,token:"access-token"}.
     
     for uploading a excel sheet and saving data into mongoDB.
     3. Post Request = /importFile => req.body = {excel file}, Response = {message:"imported successfully",status:200}
     
     for crud operations  on saved data
     
     for getting all the data from mongodb
     4. Get Request = /admin/fileData = Response ={userData:[array of users data]}
     
     for updating any data using its id
     5. Patch Request = /admin/update/:id = req.body = {updated data} , req.params={data._id} , response :{message:"data updated successfully"}.
     
     for deleting any data using its id
     6. Delete Request = /admin/delete/:id = req.params={data._id} , response :{message:"data deleted successfully"}.
     
     for adding data to mongodb
     7. Post Request = /admin/addData = req.body={data of user} , response : {message :"data has been added"};
     
     for finding the total sums of all students 
     8. Get Request = /admin/sum= response={totalSum};
     
     for finding the avg marks of all students 
     9. Get Request = /admin/sum = response={avgSum};
   
  ## Authorization & Authentication
    1.Authentication middleware = It will check first , user is logged in or not, if user is not logged in it will give response please login again otherwise it will check for token , is token correct or not if correct than it will give permission of end points of rest full api's .
    
    2. Authorization middleware = It will check for role based access control , if user role is admin than only user can perfome any operation on data. otherwise it will give response access-denied.
   
   

     
     
