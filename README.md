# Distributed applications assignment
Pablo Beltran / January 2nd 2022
## About
This project was made in the lapse of 5 hours as an assignment for Distributed Applications subject in college in order to apply the knowledge acquired related to micro services. The purpose of this project is to check if the user is 18+years and if the Ecuadorian ID is real.
## APIs
The project is divided in 4 parts in which, 3 parts, are API source code. Each of the applications are run in different ports. The APIs are the following:
### Time API
The purpose of this API is to return the current date in yyyy-mm-dd format. This is a GET API which needs to be called with the following URL.
```
http://localhost:3000/api/date/get
```
This returns an object with the following information.
```
{
	date: string, // Date in yyyy-mm-dd format
}
```
### Verify ID API
The purpose of this API is to return if the Ecuadorian Identification in the body is a real identification. This is a GET API, which takes as a param the identification in body. To call this API, use the following URL.
```
http://localhost:3333/api/id/verify/:id
```
*Note: replace :id with the identification number*
This returns an object with the following information.
```
{
	id: string, // Identification taken from body
	real: boolean, // If the ID is real -> true, else false
}
```
### Verify Age API
The purpose of this API is to return if the age of the user if +18 years old. This is a GET API, which takes as a param the birth date in body. To call this API, use the following URL.
```
http://localhost:3030/api/age/verify/:age
```
*Note: replace :age with the age in format dd-mm-yyyy*
This returns an object with the following information.
```
{
	overAge: boolean, // If the user is +18 years old -> true, else false
	currentAge: number, // Current age of the user based on the birth date
}
```
## Install the project locally
To install the project locally, is necessary to have installed Node JS and NPM in the PC. You can find an installation guide [here](https://nodejs.org/en/download/) . Now clone the repository using the following command.
```
git clone https://github.com/Ilchampo/dist-apps-assignment.git
```
Once clone, go to dist-apps-assignment folder and create a dotenv file (.env) with the following information.
```
DATE_PORT = 3000
AGE_PORT = 3030
ID_PORT = 3333
APP_PORT = 8080
```
Finally install the dependency packages with.
```
npm i
```

If you are in a UNIX system, run the following command and fill the dotenv file with the information above.
```
git clone https://github.com/Ilchampo/dist-apps-assignment.git && cd dist-apps-assignment/ &&
touch .env && npm i
```
Once everything is installed, run the following command to launch the application and the APIs.
```
npm run dist
```
You should see the following information in the console.
![enter image description here](https://i.gyazo.com/ccc426ba3310e4415bce919e33af77e9.png)
## Use the Web Application
To use the web application go to http://localhost:8080 and enter the required values. Finally press the 'Send' button and check the results. As an example:
![enter image description here](https://i.gyazo.com/214800411f05ebdb8cca670d63e3177e.png)
![enter image description here](https://i.gyazo.com/3be352839ea4b6f5c819b6b9e78d4b55.png)
*Note: the identification was covered for security reasons*
## Project Diagram
As mentioned before, this project is oriented in micro services. In order to display the architecture, the following diagram was made prior coding.
![enter image description here](https://i.gyazo.com/c403dbd6923c11d75cd70a3950a8398b.png)