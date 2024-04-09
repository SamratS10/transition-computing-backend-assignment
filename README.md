***************************************************************TRANSITION COMPUTING BACKEND ASSIGNMENT************************************************************************************
In this project I have made the REST api`s for Login,Logout,Register,user authentication and authorization using the jsonwebtoken.I used Mongodb database to store the data of registered users

***REGISTER**
API-URL : https://transition-computing-backend-assignment.onrender.com/api/v1/register Method:POST User Registeration : while user registeration the user has to give input of name,email,password,but in schema I have mentioned the role key an by default it is "user". ----The email is verified by providing some string to validate,if email is invalid it gives an error message of invalid email "please provide valid email" ----Before storing the user data into the database, I have filtered weather the eamil is exist in the database or not.If email is present in database it gives the message "Email alredy exist pls login" ---The password is hashed using the bcrypt and the password is saved securly.

***LOGIN***
Api-Url:https://transition-computing-backend-assignment.onrender.com/api/v1/login Method:POST User Login : The user has to provide  the email and password. ----The password is compared using bcrypt.compare method, if the password is incorrect it says invalid credientials provided. ----If the user is logged in successfuly,It shows the user is logged in successfully. ---I have used jsonwebtoken ,the token is generated when the user is successfully loged in and that token is stored in cookies.***The token is sent in the response when the user logged in successfully***  ----The cookie name i have used in this project is "jwtoken" ---while using jsonwebtoken in jwt.sign method i have stored the user (_id) as userId and this is used to retrive the user data ---The cookie will expires in 1day and the jwtoken will expires in 1day

***LOGOUT***
API-URL:https://transition-computing-backend-assignment.onrender.com/api/v1/logout Method:GET User Logout: In this task the cookie is destroyed and the user will be loggedOut

***MIDDLEWARES*** 
***IsAdmin*** ---using this middleware i have implemented that the admin can view all the registered users from database. ---if the user is not admin, it gives response as "You are not allowed for this process". ---for testing i have made one user as a admin ***{ "email":"samrat123@gmail.com", "password":"samrat123" } ***Please use above email and password,The role of this user is admin.So this user can view the all registered user`s which are present in the database API-URL:"https://transition-computing-backend-assignment.onrender.com/api/v1/all-users" Method:GET

****AUTHENTICATE USER***:In this middleware the jwt token is verified or authorized.
****User Login Details**** : in this route if user logged in successfully,then by authorization the token we get the response of the user details like name,email,role.
API URL:"https://transition-computing-backend-assignment.onrender.com/api/v1/user-details"
METHOD:"GET"

****Forgot password***:
The user has to send the email,password,confirmPassword in body and by using the email, I have updated the user password.
API URL:"https://transition-computing-backend-assignment.onrender.com/api/v1/forgot-password"
METHOD:"PUT"

***Delete User from database***:
You have to login as a admin and you can delete the user from db using the id.The id has to provide in the params of the url.
API URL:"https://transition-computing-backend-assignment.onrender.com/api/v1/remove-client/:id"
METHOD:"DELETE"


All this apis are perfectly tested in the POSTMAN and the outputs are perfect to the code which I have implemented..

Swagger Js : URL:"https://transition-computing-backend-assignment.onrender.com/docs"
I have wrote all the documents for the routes,but the login,register,logout are successfull.

BACKEND -- NODE JS,EXPRESS JS 
DATABASE --MONGODB 
DEPLOYMENT --RENDER

-----------------------------------------------------------------------------------------Thank You--------------------------------------------------------------------------------
