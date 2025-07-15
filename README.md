## WEBSITE
[DEPLOYMENT LINK](https://dummy-paytm.vercel.app)  
* **Please expect a delay of 40-50 seconds when signing in for the first time, due to cold start problem as it is deployed on free instance on render.**


## ✨ FEATURES
* Signup
* Signin
* Searching among already present users
* Sending money to other users


## 🛠 TECH STACK
**Frontend**
- React.js
- TailwindCSS

**Backend**
- Node.js
- Express.js
- Zod
- JWT
- Argon2

**Database**
- Mongoose
- MongoDB


## 🏗️ ARCHITECTURE OVERVIEW
<img width="1244" height="436" alt="image" src="https://github.com/user-attachments/assets/dbde964e-fd85-490e-855f-a8863003a10c" />


## 🧑‍💻 LOCAL INSTALLATION & SETUP
> ⚠️ Make sure to set up the `.env` file.  
> .env file must contain **MONGODB_URL**, **JWT_SECRET** and **PORT**
```bash
cd backend        # Move to backend folder
npm install       # Install required dependencies
node index.js     # Start backend server on specified PORT in .env file (https://localhost:PORT)
 
cd ..             # Move back to root folder
cd frontend       # Move to frontend folder
npm install       # Install required dependencies
npm run dev       # Start frontend on port 5173 (https://localhost:5173)
```


## 📝 DESCRIPTION
- You can signup and then signin
- Your password will be stored in database after encrypting through Argon2 password hashing tool
- After signing in, you can see all the users who have already signed up on the platform
- You can also search for any specific user on the platform
- You can click send money and it will redirect you to another page
- In send money page, you can send money to the user by entering any valid number(it should be less than or equal to your current balance)
- On dashboard page, you can also logout manually by hovering over top right corner of your profile and then clicking logout


## 🔮 FUTURE SCOPES
- Removing the name of user itself in dashboard
- Actually using JWT for keeping user's session logged in
- Removing prop-drilling(due to which if page reloads, error is shown) and using state management tools
