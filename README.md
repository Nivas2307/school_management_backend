
# school_management_db

Develop a RESTful API for managing schools using Node.js, Express.js, and MySQL. The API should allow users to add schools and list them, sorted by proximity.


## Installation
1.Install Node.js
Required for: Running the backend server
```
node -v  # Check Node.js version
npm -v   # Check npm (Node Package Manager) version
```
2.Install Required Node.js Packages &dependencies

*express → Web framework for handling API requests
*mysql → Connects Node.js to MySQL database  
*dotenv → Loads environment variables from .env file  
*cors → Enables cross-origin requests
```
npm install express mysql dotenv cors
```
3.Install MySQL
Required for: Storing school data
```
mysql --version #Check the version
mysql -u root -p  #start MySQL server
```
4.Install Postman (for API Testing)
Required for: Sending API requests

5.Install Git (for Version Control & GitHub Upload)
Required for: Uploading the project to GitHub

6.Run the Project

7.Start MySQL Server:
```
# mysql -u root -p 
# CREATE DATABASE school_db; #create the db
# USE school_db;  

* node app.js
```
8.Test API Endpoints in Postman:
```
POST /api/addSchool (Add a new school)
GET /api/listSchools (List all schools)










## Featutres of this assignment
1.Add a New School
#Endpoint: POST/api/addSchool
Functionality:
*Accepts school name, address, latitude, and longitude
*Stores the details in a MySQL database
*Validates that all required fields are provided

2.List All Schools
#Endpoint: GET /api/listSchools
Functionality:
*Retrieves all schools from the database
*If latitude & longitude are provided, sorts schools by nearest location (Haversine formula)
*If no parameters are given, returns all schools without sorting

3.Input Validation & Error Handling
*Ensures that all required fields are provided when adding a school
*Returns error messages if latitude/longitude is missing or invalid
*Handles database errors gracefully

4.MySQL Database Integration 
*Uses MySQL for storing and retrieving school data
*Includes proper database queries for:
    Inserting a new school
    Fetching all schools

5.Built with Node.js & Express.js 
*Express.js framework for handling API routes
*MySQL package for database connectivity
*CORS enabled for external API access    

6.GitHub & Version Control 
*Supports Git-based version control for tracking changes
*Can be deployed & shared via GitHub


## Screenshots
![Screenshot 2025-03-12 161027](https://github.com/user-attachments/assets/0fa521a8-68ad-462a-8fed-b82e27c42f17)
![Screenshot 2025-03-12 160947](https://github.com/user-attachments/assets/1d3a29ea-aa75-46e8-8586-f23397499bb8)


## Demo
https://github.com/user-attachments/assets/facae1be-ce77-4540-bc5d-a294a1caabe1