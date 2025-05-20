# WEBSITE
[LINK](https://dummy-paytm.vercel.app)

# DESCRIPTION
* Users can signup and signin on the website
* Users can send money to their friends or other people who have previously signed up on the platform
* Frontend deployed on VERCEL and Backend on RENDER

# ENDPOINTS
## API ENDPOINTS
* **SIGNUP** - You can send requests to this endpoint where in the request body you will have to send an object having your Email as username, your firstname and lastname and the password which you want to set for your account and if your inputs are valid then you will be signed up and you will get a dummy balance by a random function.

* **SIGNIN** - You can send requests to this endpoint where in the request body you will have to send an object having your Email as username and your password and if inputs are correct you will get a JWT token from the server, which will we automatically stored in your browser and it can be used for subsequent requests.

* **DASHBOARD** - You can send requests to this endpoint where in the request body you don't have to send anything, it will automatically send the token stored in your browser and send it in header and you will see a list of users already present on platform.

* **SEND MONEY** - If you click send money button, then you will be directed to a page where you have to enter a positive amount and then you can send money to that individual and after getting an alert for succesfull transaction, you will be automatically directed to Dashboard
